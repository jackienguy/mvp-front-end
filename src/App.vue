<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
       <router-link to="/">Register</router-link>
       <router-link to="/profile">Profile</router-link>
       <router-link to="/signin">Signin</router-link>
       <router-link to="/recruiter-dashboard">Recruiter-Dashboard</router-link>
    </div>
    <router-view/>
  </div>
</template>

