const express = require('express'); 
const app = express(); 
const pool = require("../mysql/mysql_connect");

const controller = {};
//View Home
controller.home = async (req, res) => {
	  let removed = req.query.removed;
   const users = await pool.query(`SELECT * FROM users WHERE state = "active"`);
   res.render('home', { users, removed });
}
//View Add
controller.add = (req, res)=>{
  res.render('add');
}
//View Edit
controller.edit = async (req, res)=>{
	const id = req.params.id;
  const users = await pool.query('SELECT * FROM users WHERE id  = ?', [id]);
  res.render('edit', { users: users[0], alert: "Edit user" });
}
//View view
controller.view = async (req, res)=>{
	const id = req.params.id;
 
  res.render('view', {alert: `These is the view id:=${id}` });
}


//Create user
controller.add_user = async (req, res)=>{
	const { first_name, last_name, email, phone, comments } = req.body;
	const user = {
		first_name, last_name, email, phone, comments
	};
	await pool.query('INSERT INTO users SET ?', [user]);
	res.render("add", {alert: 'User added successfully.' });
}
//Delete user
controller.del_user = async (req, res) => {
  const id = req.params.id;
  await pool.query(`DELETE FROM users WHERE id = ${id}`);
	let removed = encodeURIComponent('User successfully removed')
  res.redirect("/?removed="+removed);
};
//Search user
controller.search_user = async (req, res) => {
  const search_db = req.body.search;
  const users = await pool.query(`SELECT * FROM users WHERE first_name LIKE ?`, ['%'+ search_db +'%']);
  res.render("home", { users });
};
//Edit user
controller.update_user = async (req, res) => {
  const id = req.params.id;
	const { first_name, last_name, email, phone, comments } = req.body;
	const users = {
		first_name, last_name, email, phone, comments
	};
  await pool.query('UPDATE users SET first_name= ?, last_name= ?, email= ?, phone= ?, comments= ? WHERE id= ?', [first_name, last_name, email, phone, comments, id]);
  res.render("edit", {users ,alert: "Update successful"});
};
module.exports = controller;