import { Dialog, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  HandThumbUpIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedTeamMembersState } from "../../../../global-state/selected-team-member-atom";
import { tasksState } from "../../../../global-state/tasks-atom";
import { TaskData } from "../../../../interfaces/task-data";
import { AssigneeItem } from "../../../custom-ui-elements/assignee-item/assignee-item";
import { Popup } from "../../../popup/popup";
import { EditTaskPopup } from "../edit-task-popup/edit-task-popup";

type TaskDetailProps = {
  taskData: TaskData;
  onSuccess: () => void;
};

export const TaskDetail = ({ taskData, onSuccess }: TaskDetailProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showEditTaskView, setShowEditTaskView] = useState(false);
  const [selectedTeamMembers, setSelectedTeamMembers] = useRecoilState(
    selectedTeamMembersState
  );
  const [tasks, setTasks] = useRecoilState(tasksState);

  function onButtonEditClick(): void {
    setShowEditTaskView(true);
  }

  function onPopupClose(): void {
    setShowEditTaskView(false);
    setSelectedTeamMembers([]);
  }

  function onPopupCancel(): void {
    setShowEditTaskView(false);
    setSelectedTeamMembers([]);
    onSuccess();
  }

  function deleteTask(taskId: number): void {
    if (window.confirm("Delete task?")) {
      const newArr = tasks.filter((t) => t.id !== taskId);
      setTasks(newArr);
    }
  }

  function taskStatus() {
    switch (taskData.columnId) {
      case 0:
        return (
          <div className="flex items-center space-x-2">
            <CircleStackIcon
              className="h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-gray-700">Backlog</span>
          </div>
        );
      case 1:
        return (
          <div className="flex items-center space-x-2">
            <ClipboardDocumentCheckIcon
              className="h-5 w-5 text-cyan-500"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-cyan-700">Todo</span>
          </div>
        );
      case 2:
        return (
          <div className="flex items-center space-x-2">
            <CodeBracketIcon
              className="h-5 w-5 text-blue-500"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-blue-500">
              In Progress
            </span>
          </div>
        );
      case 3:
        return (
          <div className="flex items-center space-x-2">
            <ComputerDesktopIcon
              className="h-5 w-5 text-orange-500"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-orange-700">Review</span>
          </div>
        );
      case 4:
        return (
          <div className="flex items-center space-x-2">
            <HandThumbUpIcon
              className="h-5 w-5 text-green-500"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-green-700">Done</span>
          </div>
        );
    }
  }

  return (
    <div className="flex min-h-full">
      <div className="text-center">
        <Popup trigger={showEditTaskView} onCloseClick={onPopupCancel}>
          <EditTaskPopup onSuccess={onPopupClose} taskData={taskData} />
        </Popup>
      </div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-shrink-0 items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500"
                    alt="Your Company"
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="flex-1 py-8 xl:py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:grid xl:max-w-5xl xl:grid-cols-3">
          <div className="xl:col-span-2 xl:border-r xl:border-gray-200 xl:pr-8">
            <div>
              <div>
                <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {taskData.title}
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">#{taskData.id}</p>
                  </div>
                </div>
                <div className="py-3 xl:pt-6 xl:pb-0">
                  <h2 className="sr-only">Description</h2>
                  <div className="prose max-w-none">
                    <h4>Description</h4>
                    <p>{taskData.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <section aria-labelledby="activity-title" className="mt-8 xl:mt-10">
              <div>
                <div className="divide-y divide-gray-200">
                  <div className="pt-6">
                    {/* Activity feed*/}
                    <div className="flow-root"></div>
                    <div className="mt-6">
                      <div className="flex space-x-3">
                        <div className="min-w-0 flex-1">
                          <form action="#">
                            <div className="mt-6 flex items-center space-x-4">
                              <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                onClick={onButtonEditClick}
                              >
                                <PencilIcon
                                  className="-ml-1 mr-2 h-5 w-5 text-blue-500"
                                  aria-hidden="true"
                                />
                                <span>Edit task</span>
                              </button>
                              <button
                                className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                onClick={() => deleteTask(taskData.id)}
                              >
                                <TrashIcon className="-ml-1 mr-2 h-5 w-5 text-red-800" />
                                <span>Delete task</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <aside className="hidden xl:block xl:pl-8">
            <h2 className="sr-only">Details</h2>
            <div className="space-y-5">
              {taskStatus()}
              <div className="flex items-center space-x-2">
                <CalendarIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-gray-900">
                  Created on <time>{taskData.dateOfCreation}</time>
                </span>
              </div>
            </div>
            <div className="mt-6 space-y-8 border-t border-gray-200 py-6">
              <div>
                <h2 className="text-sm font-medium text-gray-500">Assignees</h2>
                <div className="mx-auto max-w-md sm:max-w-3xl">
                  <ul role="list" className="mt-3 space-y-3">
                    {taskData.members.map((person) => (
                      <li key={person.id}>
                        <AssigneeItem person={person} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};
