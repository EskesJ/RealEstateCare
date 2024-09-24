<template>
    <v-container>
      <v-card class="my-2">
        <v-card-item>
          <v-card-title>Project Details</v-card-title>
        </v-card-item>
        <v-card-text>
          <p class="mx-1"><strong>ID:</strong> {{ selectedProject.id }}</p>
          <p class="mx-1"><strong>Address:</strong> {{ selectedProject.address }}</p>
          <p class="mx-1"><strong>Status:</strong> {{ selectedProject.status }}</p>
        </v-card-text>
      </v-card>
  
      <v-card class="my-2">
        <v-card-item>
          <v-card-title>Reported Damages</v-card-title>
        </v-card-item>
        <v-card-text>
          <ul v-if="selectedProject.reportedDamage.length">
            <li v-for="(damage, index) in selectedProject.reportedDamage" :key="index">
              <p class="mx-1"><strong>Location:</strong> {{ damage.location }}</p>
              <p class="mx-1"><strong>New Damage:</strong> {{ damage.newDamage }}</p>
              <p class="mx-1"><strong>Type of Damage:</strong> {{ damage.typeOfDamage }}</p>
              <p class="mx-1"><strong>Date:</strong> {{ new Date(damage.date).toLocaleString() }}</p>
              <p class="mx-1"><strong>Urgency:</strong> {{ damage.urgency }}</p>
              <p class="mx-1"><strong>Description:</strong> {{ damage.description }}</p>
            </li>
          </ul>
        </v-card-text>
      </v-card>
  
      <v-card class="my-2">
        <v-card-item>
          <v-card-title>Overdue Maintenance</v-card-title>
        </v-card-item>
        <v-card-text>
          <ul v-if="selectedProject.overdueMaintenance.length">
            <li v-for="(maintenance, index) in selectedProject.overdueMaintenance" :key="index">
              <p class="mx-1"><strong>Location:</strong> {{ maintenance.location }}</p>
              <p class="mx-1"><strong>Type of Maintenance:</strong> {{ maintenance.typeOfMaintenance }}</p>
              <p class="mx-1"><strong>Urgency:</strong> {{ maintenance.urgency }}</p>
              <p class="mx-1"><strong>Cost Indication:</strong> {{ maintenance.costsIndication }}</p>
            </li>
          </ul>
        </v-card-text>
      </v-card>
  
      <v-card class="my-2">
        <v-card-item>
          <v-card-title>Technical Installations</v-card-title>
        </v-card-item>
        <v-card-text>
          <ul v-if="selectedProject.technicalInstallations.length">
            <li v-for="(installation, index) in selectedProject.technicalInstallations" :key="index">
              <p class="mx-1"><strong>Location:</strong> {{ installation.location }}</p>
              <p class="mx-1"><strong>Type of Installation:</strong> {{ installation.typeOfInstallation }}</p>
              <p class="mx-1"><strong>Reported Malfunction:</strong> {{ installation.reportedMalfunction }}</p>
              <p class="mx-1"><strong>Test Procedure:</strong> {{ installation.testProcedure }}</p>
              <p class="mx-1"><strong>Approved:</strong> {{ installation.approved }}</p>
              <p class="mx-1"><strong>Comments:</strong> {{ installation.comments }}</p>
            </li>
          </ul>
        </v-card-text>
      </v-card>
  
      <v-card class="my-2">
        <v-card-item>
          <v-card-title>Inventory Modifications</v-card-title>
        </v-card-item>
        <v-card-text>
          <ul v-if="selectedProject.inventoryModifications.length">
            <li v-for="(modification, index) in selectedProject.inventoryModifications" :key="index">
              <p class="mx-1"><strong>Current Modifications:</strong> {{ modification.currentModifications }}</p>
              <p class="mx-1"><strong>Location:</strong> {{ modification.location }}</p>
              <p class="mx-1"><strong>Performed By:</strong> {{ modification.performedBy }}</p>
              <p class="mx-1"><strong>Description:</strong> {{ modification.description }}</p>
              <p class="mx-1"><strong>To Do:</strong> {{ modification.toDo }}</p>
              <p class="mx-1"><strong>Comments:</strong> {{ modification.comments }}</p>
            </li>
          </ul>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'recordDetail',
    props: ['selectedProject'],
  }
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  </style>