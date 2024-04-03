describe("Login Tests PMTool", () => {
  it("Page header is visible", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("h3").should("be.visible");
  });
});
