/**
 * Created by Wayuki on 25-Jan-17 0025.
 */
import React, { Component } from 'react';

import Header from './common/Header.react';
import Main from './main/Main.react';
import Invitee from './invitee/Invitee.react';

class App extends Component {

    state = {
        filters: {
            confirmed: false,
        },
        invite: {
            fields: {
                name: '',
            },
        },
        invitees: [],
    };

    currentId = 0;

    alterInviteesProps = (inviteeId, prop, toggle = false, callback = () => {}) => {
        this.setState({
            invitees: this.state.invitees.map((invitee) => {
                if (invitee.id === inviteeId) {
                    if (toggle) {
                        return {
                            ...invitee,
                            [prop]: !invitee[prop],
                        };
                    }
                    return {
                        ...invitee,
                        ...prop,
                    };
                }
                return invitee;
            }),
        }, callback);
    };

    handleInviteFieldsUpdate = (e) => {
        const value = e.target.value;
        const key = e.target.name;
        this.setState({
            invite: {
                ...this.state.invite,
                fields: {
                    ...this.state.invite.state,
                    [key]: value,
                },
            },
        });
    };

    handleInviteFormSubmit = (e) => {
        e.preventDefault();
        this.currentId += 1;
        const invitee = {
            id: `invitee-${this.currentId}`,
            name: this.state.invite.fields.name,
            confirmed: false,
            isEditing: false,
        };
        this.setState({
            invite: {
                ...this.state.invite,
                fields: {
                    ...this.state.invite.state,
                    name: '',
                },
            },
            invitees: [
                ...this.state.invitees,
                invitee,
            ],
        });
    };

    handleInviteeChecked = (e) => {
        this.alterInviteesProps(e.target.id, { confirmed: e.target.checked });
    };

    handleEditInvitee = (e, inviteeId) => {
        this.alterInviteesProps(inviteeId, 'isEditing', true);
    };

    handleEditInviteeChange = (e, inviteeId) => {
        const value = e.target.value;
        const key = e.target.name;

        this.alterInviteesProps(inviteeId, { [key]: value });
    };

    handleRemoveInvitee = (e, inviteeId) => {
        this.setState({
            invitees: this.state.invitees.filter(invitee => invitee.id !== inviteeId),
        });
    };

    handleFilterChecked = (e) => {
        this.setState({
            filters: {
                ...this.state.filters,
                confirmed: e.target.checked,
            },
        });
    };

    render() {
        return (
            <div className="wrapper">
                <Header
                    name={this.state.invite.fields.name}
                    onFieldChange={this.handleInviteFieldsUpdate}
                    onFormSubmit={this.handleInviteFormSubmit}
                />
                <Main onFilterChecked={this.handleFilterChecked}>
                    {
                        this.state.invitees
                            .filter(invitee => !this.state.filters.confirmed || invitee.confirmed)
                            .map(invitee => (
                                <Invitee
                                    key={invitee.id}
                                    invitee={invitee}
                                    onInviteeChecked={this.handleInviteeChecked}
                                    onEditInvitee={this.handleEditInvitee}
                                    onEditInviteeChange={this.handleEditInviteeChange}
                                    onRemoveInvitee={this.handleRemoveInvitee}
                                />
                            ))
                    }
                </Main>
            </div>
        );
    }
}

export default App;
