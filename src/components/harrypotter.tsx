import styled from "styled-components";
import type {Book} from "../interfaces/books.ts";

const AllBooksDiv=styled.div`
    justify-content: space-evenly;
    display: flex;
    flex-flow: row wrap;    
    

    background-size: 100% auto;
    background-image: url("/bookshelf.jpg");
    
`;

const SingleBookDiv=styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;   
    margin: 3%;

    max-width: 20%;
    padding: 3%;
    background-image: url("/bookcover.jpg");
    color: #D4AF37;;
    font: italic small-caps bold calc(2px + 1vw) Pirata One, Mystic Venom;
    text-align: center;
`;

const BookTitle = styled.h1`
    font: italic small-caps bold calc(30px + 1vw)  Mystic Venom, Pirata One;
    color: #fff1c2d0;
`;

export default function Harry(props : { data:Book[] } ){
    return (
        <AllBooksDiv >
            {
                props.data.map((book: Book) =>
                    <SingleBookDiv key={book.number}>

                        <BookTitle>{book.title}</BookTitle>
                        <br></br>
                        <p>{book.description}</p>
                        
                        <br></br>
                        <p>{book.pages} pages</p>
                        <br></br><br></br>
                        
                        <img src={book.cover} alt={`image of ${book.title}`} />
                        <br></br>

                    </SingleBookDiv>
                )
            }

        </AllBooksDiv>
    );
}
