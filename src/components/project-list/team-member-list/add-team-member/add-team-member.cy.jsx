import { RecoilRoot } from "recoil"
import { AddTeamMember } from "./add-team-member"

describe('<AddTeamMember>', () => {
    it('mounts', () => {
      cy.mount(
        <RecoilRoot>
            <AddTeamMember/>
        </RecoilRoot>
      )

    })

    it('input change', () => {
        cy.mount(
          <RecoilRoot>
              <AddTeamMember/>
          </RecoilRoot>
        )
        cy.get('[data-cy=team-member-list-name-input]').type("TeamMember1")
        cy.get('[data-cy=team-member-list-name-input]').should('have.value','TeamMember1')
      })
  })