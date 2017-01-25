/**
 * Created by Wayuki on 25-Jan-17 0025.
 */
import React, { PropTypes } from 'react';

const Invitee = ({ invitee: { id, name, confirmed, isEditing }, onInviteeChecked, onEditInvitee, onEditInviteeChange, onRemoveInvitee }) => (
    <li className={confirmed ? 'responded' : ''}>
        { isEditing ? <input name="name" type="text" value={name} onChange={e => onEditInviteeChange(e, id)} /> : name }
        <label htmlFor={id}>
            Confirmed <input type="checkbox" id={id} onChange={onInviteeChecked} />
        </label>
        <button type="button" onClick={(e) => { onEditInvitee(e, id); }}>{ isEditing ? 'Save' : 'Edit' }</button>
        <button type="button" onClick={(e) => { onRemoveInvitee(e, id); }}>Remove</button>
    </li>
);

Invitee.propTypes = {
    invitee: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        confirmed: PropTypes.bool.isRequired,
        isEditing: PropTypes.bool.isRequired,
    }).isRequired,
    onInviteeChecked: PropTypes.func.isRequired,
    onEditInvitee: PropTypes.func.isRequired,
    onEditInviteeChange: PropTypes.func.isRequired,
    onRemoveInvitee: PropTypes.func.isRequired,
};

export default Invitee;
