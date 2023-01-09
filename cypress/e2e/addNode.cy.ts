import {
  addNodeButtonHome,
  addNodeButtonSidebarOpen,
  addNodeModal,
  addNodeSubmitButton,
  addNodeCloseButton,
  link,
  startTime,
  endTime,
  description,
  tags,
  tagError,
  mainError,
  toast,
} from "../support/constants/addNode";

describe("Add Node Form / Home interactions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // different Add Node + buttons depending on whether the sidebar is open or not
  const openButton = (setting: "home" | "sidebar") => {
    if (setting === "home") {
      return cy.get(addNodeButtonHome);
    }

    return cy.get(addNodeButtonSidebarOpen);
  };

  const modal = () => cy.get(addNodeModal);
  const submitButton = () => cy.get(addNodeSubmitButton);
  const closeButton = () => cy.get(addNodeCloseButton);
  const tagErrorMessage = () => cy.get(tagError);
  const mainErrorMessage = () => cy.get(mainError);
  const linkInput = () => cy.get(link);
  const startTimeInput = () => cy.get(startTime);
  const endTimeInput = () => cy.get(endTime);
  const descriptionInput = () => cy.get(description);
  const tagsInput = () => cy.get(tags);
  const toastBody = () => cy.get(toast);

  it("clicking the Add Node + button opens the Add Node Form modal, X button closes it", () => {
    openButton("home")
      .should("be.visible")
      .and("be.enabled")
      .and("contain.text", "Add Node +")
      .click();

    modal().should("be.visible").and("contain.text", "Add Node");

    closeButton().click({ waitForAnimations: false });

    modal().should("not.exist");
  });

  it("submitting the form with all fields empty yields 5 error messages", () => {
    openButton("home").click();

    submitButton().click();

    mainErrorMessage().should("not.be.visible").and("contain.text", "5 errors");

    cy.contains(/the field is required/i).should("be.visible");

    tagErrorMessage()
      .should("be.visible")
      .and(
        "contain.text",
        "You need to enter at least 1 topic tag to submit a node."
      );
  });

  it("all fields filled out correctly submits the form, closes the modal and displays custom success message", () => {
    cy.intercept("POST", "https://knowledge-graph.sphinx.chat/add_node", {
      body: {
        success: true,
      },
      statusCode: 200,
    }).as("add_node");

    openButton("home").click();

    linkInput().type("youtube.com/watch?v=Midgx8bBDMk", {
      waitForAnimations: false,
    });

    startTimeInput().type("000000");
    endTimeInput().type("000030");
    descriptionInput().type("description");
    tagsInput().type("test").type("{enter}");

    submitButton().click();

    cy.wait("@add_node");

    modal().should("not.exist");

    // Waiting for Toast opacity keyframe to complete
    cy.wait(2000);

    toastBody()
      .should("be.visible")
      .and("contain.text", "Node submitted successfully!");
  });

  it("submitting the form but receiving an error response from the server, displays custom error message", () => {
    cy.intercept("POST", "https://knowledge-graph.sphinx.chat/add_node", {
      body: { error: { message: "Payment required" } },
      statusCode: 402,
    }).as("add_node");

    openButton("home").click();

    linkInput().type("youtube.com/watch?v=Midgx8bBDMk", {
      waitForAnimations: false,
    });

    startTimeInput().type("000000");
    endTimeInput().type("000030");
    descriptionInput().type("description");
    tagsInput().type("test").type("{enter}");

    submitButton().click();

    cy.wait("@add_node");

    // Waiting for Toast opacity keyframe to complete
    cy.wait(2000);

    toastBody()
      .should("be.visible")
      .and("contain.text", "Node submission failed, please try again.");
  });
});
