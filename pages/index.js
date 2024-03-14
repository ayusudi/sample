import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
          props.users?.map((el, i) => {
            return (
              <tr key={i}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  return {
    props: { users }
  }
}