export interface Student{
  studentID: number;
  ime: string;
  prezime: string;
  brojIndeksa: string;
  datumRodjenja: Date;
  adresa: string;
  telefon: string;
}

export interface PolozenIspit {
  polozenIspit: number;
  studentID: number;
  predmetID: number;
  datumPolaganja: Date;
  ocena: number;
  Student: Student;
  Predmet:Predmet;
}
  
export interface Predmet {
  predmetID: number;
  naziv: string;
}
  
export interface Korisnik {
  korisnicko_ime: string;
  lozinka: string;
}