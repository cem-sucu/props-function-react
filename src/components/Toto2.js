const Toto2 = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <button
                disabled={props.leState.disabled}
                onClick={() => props.reponseTotoProps("je refuse maman")}
            >
                Réponse
            </button>

            <p>{props.leState.messageToto}</p>
        </div>
    );
};

export default Toto2;
