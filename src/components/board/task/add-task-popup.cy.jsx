import { RecoilRoot } from "recoil"
import { AddTaskModal } from "./add-task-popup"

describe('<AddTaskModal>', () => {
    it('mounts', () => {
      cy.mount(
        <RecoilRoot>
           <AddTaskModal onSuccess={{}} projectId={1} teamMembers={[{
            id: 1,
            name:"Test"
           }]}/>
        </RecoilRoot>
      )

    })

    it('task title', () => {
        cy.mount(
            <RecoilRoot>
            <AddTaskModal onSuccess={{}} projectId={1} teamMembers={[{
            id: 1,
            name:"Test"
           }]}/>
         </RecoilRoot>
        )
        
        cy.get('[data-cy=input-task-title]').type("Test title")
        cy.get('[data-cy=input-task-title]').should('have.value',"Test title")

       
    })

      
    it('task description', () => {
        cy.mount(
            <RecoilRoot>
            <AddTaskModal onSuccess={{}} projectId={1} teamMembers={[{
            id: 1,
            name:"Test"
           }]}/>
         </RecoilRoot>
        )
        
        cy.get('[data-cy=input-task-description]').type("Test description")
        cy.get('[data-cy=input-task-description]').should('have.value',"Test description")

       
    })
  })