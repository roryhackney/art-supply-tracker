
function DisplayCancel ({displayCancel, setDisplayCancel}) {
    if (displayCancel) {
        return (
        <div>
            <p>You requested that your account be deleted on [date].</p>
            <p>Your data will be deleted permanently at [datetime] and cannot be recovered.</p>
            <p>To cancel and save your account, just click the button below.</p>
            <button className="button" type="button" onClick={
                () => {
                    setDisplayCancel(false);
                }
            }>Cancel Deletion</button>
        </div>);
    } else {
        return;
    }
}

export default DisplayCancel;