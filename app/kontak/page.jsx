"use client";
import { useSelector } from "react-redux";
import ListContactsCard from "../components/contact/ListContactsCard";

export default function Kontak() {
  const kontak = [...useSelector((state) => state.kontak.data)];

  return (
    <>
      <h3 className="text-xl sm:text-2xl font-bold text-white pb-3">
        Contacts
      </h3>
      <ListContactsCard dataItem={kontak} />
    </>
  );
}
