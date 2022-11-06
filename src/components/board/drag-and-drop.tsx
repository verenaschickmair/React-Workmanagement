import { Fragment } from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "../../global-state/tasks-atom";
import "./drag-and-drop.css";

export const DragAndDrop = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  //DRAG
  // select the item element
  const dragItems = document.querySelectorAll(".dragItem");
  //setDragItems(items);
  console.log(dragItems);

  // attach the dragstart event handler
  dragItems?.forEach((item) => {
    item?.addEventListener("dragstart", dragStart);
  });

  // handle the dragstart
  function dragStart(e: any) {
    e.dataTransfer.setData("text/plain", e.target.id);
  }

  //DROP
  const dropBoxes = document.querySelectorAll(".dropBox");
  //setDropBoxes(boxes);
  console.log(dropBoxes);

  dropBoxes?.forEach((box) => {
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragover", dragOver);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("drop", drop);
  });

  function dragEnter(e: any) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }

  function dragOver(e: any) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }

  function dragLeave(e: any) {
    e.target.classList.remove("drag-over");
  }

  function drop(e: any) {
    e.target.classList.remove("drag-over");

    // get the draggable element
    const id = e.dataTransfer.getData("text/plain");
    const draggable = document.getElementById(id);
    console.log(draggable);

    // add it to the drop target
    e.target.appendChild(draggable);

    const dropId = Number(e.target.id.charAt(4));
    const dragId = Number(id.charAt(4));

    console.log(dropId);
    console.log(dragId);

    let task = tasks.find((task) => task.id === dragId);
    console.log(task);

    if (task) {
      setTasks(
        [...tasks].map((t) => {
          if (task && t.id === dragId) return { ...t, columnId: dropId };
          else return t;
        })
      );
    }

    console.log(tasks);
  }
  return <Fragment></Fragment>;
};
