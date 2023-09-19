import axios from "axios";
import {Hero} from "@/model";

export const getHeroes = async () => {
  const {data} = await axios.get(' http://localhost:3000/heroesList');
  return data;
}

export const getHero = async (id: number) => {
  const {data} = await axios.get(` http://localhost:3000/heroesList/${id}`);
  return data;
}

export const deleteHeroes = async (id: number) => {
  await axios.delete(` http://localhost:3000/heroesList/${id}`);
}

export const createHeroes = async (hero: Hero) => {
  await axios.post(` http://localhost:3000/heroesList`, hero);
}

export const editHero = async (hero: Hero) => {
  await axios.patch(` http://localhost:3000/heroesList/${hero.id}`, hero);
}
