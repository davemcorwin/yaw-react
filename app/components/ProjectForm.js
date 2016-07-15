import React from 'react'
import { Field, Form } from 'react-redux-form'
import { connect } from '../utils'

const ProjectForm = ({ project, actions: { addProject }, hideModal }) =>
  <Form
    className="form"
    model="project"
    onSubmit={projectAttributes => {
      addProject(projectAttributes)
      hideModal()
    }}>

    <h3>New Project</h3>
    <Field model="project.name">
      <label>Project Name:</label>
      <input type="text" autofocus/>
    </Field>

    <div className="u-pull-right">
      <button
        className="button"
        onClick={hideModal}>
        Cancel
      </button>

      <button
        type="submit"
        className="button button-primary">
        Create
      </button>
    </div>
  </Form>

const mapSelectToProps = (select, ownProps) => ({
  // project: select.projectBySlug(ownProps.params.project)
})

export default connect(mapSelectToProps)(ProjectForm)
