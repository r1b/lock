import React from 'react';
import UsernameInput from './username_input';
import * as c from '../index';
import { swap, updateEntity } from '../../store/index';
import * as l from '../../lock/index';
import { setUsername } from '../username';

export default class UsernamePane extends React.Component {

  handleChange(e) {
    swap(updateEntity, "lock", l.id(this.props.lock), setUsername, e.target.value);
  }

  render() {
    const { lock, placeholder } = this.props;

    return (
      <UsernameInput
        value={c.username(lock)}
        gravatar={l.ui.gravatar(lock)}
        isValid={!c.isFieldVisiblyInvalid(lock, "username")}
        onChange={::this.handleChange}
        placeholder={placeholder}
        disabled={l.submitting(lock)}
      />
    );
  }

}

UsernamePane.propTypes = {
  lock: React.PropTypes.object.isRequired,
  placeholder: React.PropTypes.string.isRequired
};
