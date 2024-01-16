

const Verse = (props) => {

    return (
        <div className="verse">
            <blockquote>
                <p>{props.verse.verse}</p>
            </blockquote>
            <i>{props.verse.chapter}:{props.verse.verseNum}</i>
        </div>
    );
}

export default Verse;