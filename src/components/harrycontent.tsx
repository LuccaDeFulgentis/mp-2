import Harry from "./harrypotter.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {Book} from "../interfaces/books.ts";

const MainDiv=styled.div`
    width: 70vw;
    margin: auto;
`;

export default function HarryDataContent(){

    const [data, setData] = useState<Book[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://potterapi-fedeperin.vercel.app/en/books");
            const results: Book[] = await rawData.json();
            setData(results);
        }

        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));

    }, []);

    return(
        <MainDiv>

            <Harry data={data}/>

        </MainDiv>
    )
}