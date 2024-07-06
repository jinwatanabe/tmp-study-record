/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Title Test", () => {
  it("タイトルが☆学習記録一覧☆であること", () => {
    // testId(title)を指定して取得
    render(<App />);
    const title = screen.getByTestId("title");
    expect(title).toHaveTextContent("☆学習記録一覧☆");
  });
});
