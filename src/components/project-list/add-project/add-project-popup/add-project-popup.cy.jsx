import { RecoilRoot } from "recoil"
import { AddProjectModal } from "./add-project-popup"

describe('<AddProjectPopup>', () => {
    it('mounts', () => {
      cy.mount(
        <RecoilRoot>
            <AddProjectModal/>
        </RecoilRoot>
      )
      cy.get('[data-cy=project-list-input-name]').should('have.value','')
    })

    it('input change', () => {
        const onSuccess = cy.stub();
        cy.mount(
          <RecoilRoot>
              <AddProjectModal onSuccess={onSuccess}/>
          </RecoilRoot>
        )
        cy.get('[data-cy=project-list-input-name]').type("Te")
        cy.get('[data-cy=create-project-list-custom-button]').click().then(() => {
            expect(onSuccess).to.not.be.called;
          });
      })
  })