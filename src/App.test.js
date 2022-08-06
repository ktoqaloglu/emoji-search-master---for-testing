import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Header from "./Header.js";
import App from "./App.js";

describe("patika.dev Test ", () => {
  test("Header bölümü başarılı bir şekilde yüklendi mi?", () => {
    render(<Header />);
    const head = screen.getByText("Emoji Search");
    expect(head).toBeInTheDocument();
  });
  test("Emoji listesi başarılı bir şekilde yüklendi mi?", () => {
    render(<App />);
    const items = screen.getAllByText(/Click to copy emoji/i);
    const item = screen.getByText("Relaxed");
    expect(item).toBeInTheDocument();
    expect(items.length).toEqual(20);
  });
  test("Filtreleme Başarılı mı? ", () => {
    render(<App />);
    let input = screen.getByPlaceholderText("Search...");
    userEvent.type(input, "wink");
    let item = screen.getByText("Wink");
    expect(item).toBeInTheDocument();
  });
  test("Tıklama sonucunda emoji kopyalandı mı? ", () => {
    render(<App />);
    const clicks = screen.getAllByTestId("row");
    expect(clicks[0]).toHaveAttribute("data-clipboard-text");
  });
});
