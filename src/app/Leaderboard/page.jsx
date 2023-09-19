import React from 'react'
import './style.css'
// import { dummy } from '../lib/Subjects'
import { Student } from '../lib/data'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
export default function Lboard() {
  return (
    <>
    <Head>
        <script src='script.js'></script>
    </Head>
    <main class="table">
        <section class="table__header">
            <h1>Students Ranking</h1>
            <div class="input-group">
                <input type="search" placeholder="Search Student..."/>
                <img src="images/search.png" alt=""/>
            </div>
            <div class="export__file">
                <label for="export-file" class="export__file-btn" title="Export File"></label>
                <input type="checkbox" id="export-file"/>
                <div class="export__file-options">
                    <label>Export As &nbsp; &#10140;</label>
                    <label for="export-file" id="toPDF">PDF <img src="images/pdf.png" alt=""/></label>
                    <label for="export-file" id="toJSON">JSON <img src="images/json.png" alt=""/></label>
                    <label for="export-file" id="toCSV">CSV <img src="images/csv.png" alt=""/></label>
                    <label for="export-file" id="toEXCEL">EXCEL <img src="images/excel.png" alt=""/></label>
                </div>
            </div>
        </section>
        <section class="table__body">
            <table>
                <thead>
                    <tr>
                        <th> Rank<span class="icon-arrow">&uarr;</span></th>
                        <th>Name<span class="icon-arrow">&uarr;</span></th>
                        <th> Roll No. <span class="icon-arrow">&uarr;</span></th>
                        <th> Level <span class="icon-arrow">&uarr;</span></th>
                        <th> Status <span class="icon-arrow">&uarr;</span></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Student.map((e)=>(
                            <tr>
                        <td>  {e.rank} </td>
                        <td><Link href={`/profile/${e.studentid}`}>{e.name}</Link> </td>
                        <td> {e.studentid} </td>
                        <td> {e.level}</td>
                        <td>
                            {e.progress} / {e.task}
                        </td>
                        
                    </tr>

                        ))
                    }
                    
                </tbody>
            </table>
        </section>
    </main>
  
    </>

  )
}
