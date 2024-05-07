const LineGenerator = (props) => {
    // const secondPercentage = `${(props.secondInput / props.firstInput) * 100}%`;

    const seq = props.seq;
    const total = props.total;


    const secondPercentage = `${(seq / total) * 100}%`; //no lugar do 3 vem o segundo input, no lugar do 14 vem o primeiro input

    const containerStyle = {
        width: '90%',
        height: '50px',
        overflow: 'hidden',
    };

    const firstBarStyle = {
        width: '100%',
        height: '25px',
        backgroundColor: '#206020',
    };

    const secondBarStyle = {
        width: secondPercentage,
        height: '25px',
        backgroundColor: '#40BF40',
    };

    const line = {
        display: 'flex',
        alignItems: 'center',
        gap: '2px'
    }

    return (
        <div style={containerStyle}>
            <div style={line}>
                <div style={firstBarStyle}></div>
                {total}
            </div>
            <div style={line}>
                <div style={secondBarStyle}></div>
                {seq}
            </div>


        </div>
    );
};

export default LineGenerator;
