import {auth} from './firebase';
import { deleteUser } from 'firebase/auth';

function ConfirmDelete ({shouldDisplay, setShouldDisplay}) {
    if (shouldDisplay) {
        return (
        <div>
            <p>Do you really want to delete your account?</p>
            <p>Your data will be deleted permanently after 72 hours and cannot be recovered.</p>
            <button className="button" type="button" onClick={
                () => {
                    // console.log("delete this bitch");
                    //TODO: send email confirmation before deleting
                    //TODO: delay before deleting
                    let user = auth.currentUser;
                    if (user) {
                        console.log("Sending confirmation email to", user.email);
                        //once confirmed...
                        console.log("Email confirmation received. Your data will be deleted in [time] hours, at [datetime]");
                        console.log("To cancel, just log in and click the button in your account, or click the link in your email.");
                        //insert into delete_requests: requesttime, user account, deleteTime, cancelTime, wasDeleted
                        setShouldDisplay(false);
                        deleteUser(user).then(() => {
                            console.log("USER DELETED FOR REAL");
                            //redirects to login automatically, cannot be logged in again
                        }).catch((error) => {
                            console.log("Unable to delete user:", error.message);
                            if (error.code == "auth/quota-exceeded") {
                                console.log("Too many requests in the last second. Wait a moment before trying again.");
                            }
                        })
                    } else {
                        console.log("auth.currentUser claims no one is logged in");
                    }
                    
                }
            }>Yes, Delete</button>
            <button className="button" type="button" onClick={
                () => {
                    // console.log("cancel deletion");
                    setShouldDisplay(false);
                }
            }>Never Mind</button>
        </div>);
    } else {
        return;
    }
}

export default ConfirmDelete;