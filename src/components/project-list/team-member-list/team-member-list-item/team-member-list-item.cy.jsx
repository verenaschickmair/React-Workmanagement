import { RecoilRoot } from "recoil"
import { TeamMemberListItem } from "./team-member-list-item"

describe('<TeamMemberListItem>', () => {
    it('mounts', () => {
      cy.mount(
        <RecoilRoot>
           <TeamMemberListItem person={{
                id: 1,
                name:"TestPerson"
              }}/>
        </RecoilRoot>
      )

    })

    it('TeamMemberList', () => {
        cy.mount(
          <RecoilRoot>
              <TeamMemberListItem person={{
                id: 1,
                name:"TestPerson"
              }}/>
          </RecoilRoot>
        )
        cy.contains("TestPerson")
       
    })

      
  })