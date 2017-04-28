<template>
    <div id="first" class="view">

        <h1 style="font-weight: 500; font-style: italic">First</h1>
        <div v-for="user in users">
            Name: {{ user.name }}
        </div>

    </div>
</template>

<script src="./first.submodule.js"></script>