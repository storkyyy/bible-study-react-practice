import VerseList from "../verseList/VerseList";
import verses from "../../assets/verses";

const BookList = (props) => {

    return (
        props.authors.map(
            
            (book, idx) => {
            
                const versesForBook = verses.filter(verse => verse.bookId === book.id);

                return (
                    <div key={idx} className="book">
                        <h3>{book.book}</h3>
                        <VerseList class="verse-list" verses={versesForBook}/>
                    </div>
                );
            }

        )

    );

}

export default BookList;