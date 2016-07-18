import React from 'react'
import {reduxForm} from 'redux-form'

const ProjectForm = ({
  fields: { name },
  handleSubmit,
  hideModal
}) =>
  <form
    className="form"
    onSubmit={handleSubmit}>

    <h3>New Project</h3>
    <label>Project Name:</label>
    <input
      ref={input => input && input.focus()}
      type="text"
      {...name} />

    <div className="u-pull-right">
      <button
        type="button"
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
  </form>

export default reduxForm({
  form: 'project',
  fields: ['name']
})(ProjectForm)
