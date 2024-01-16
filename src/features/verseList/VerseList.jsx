import Verse from "../verse/Verse";

const VerseList = (props) => {

    return (
        <div className="verse-list">
            {props.verses.map(

                (verse, idx) => {
                    return (<Verse key={idx} verse={verse}/>);
                }

            )}
        </div>
    );
}

export default VerseList;