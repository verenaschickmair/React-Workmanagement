import { RecoilRoot } from "recoil"
import { TeamMemberItem } from "./team-member-list-item"

describe('<TeamMemberItem>', () => {
    it('mounts', () => {
      cy.mount(
        <RecoilRoot>
           <TeamMemberItem person={{
                id: 1,
                name:"TestPerson"
              }}/>
        </RecoilRoot>
      )

    })

    it('teammember', () => {
        cy.mount(
          <RecoilRoot>
              <TeamMemberItem person={{
                id: 1,
                name:"TestPerson"
              }}/>
          </RecoilRoot>
        )
        cy.contains("TestPerson")
       
    })

      
  })