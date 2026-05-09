const express = require("express");
const users = require("./MOCK_DATA.json")
const app = express();
const PORT = 8000;

// REST API
app.get("/api/users", (req, res) => {
    return res.json(users);
})

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})

// POST API
app.post("/api/users", (req, res) => {
    // TODO: Create new user
    return res.json({ status: "success", message: "POST request received" });
})

// PATCH API
app.patch("/api/users/:id", (req, res) => {
    //TODO: Update user with id
    return res.json({ status: "success", message: "PATCH request received" });
})

// DELETE API
app.delete("/api/users/:id", (req, res) => {
    //TODO: Delete user with id
    return res.json({ status: "success", message: "DELETE request received" });
})

app.listen(PORT, () => console.log("Server is running on port ", PORT));