<template>
    <div id="todo" class="container">

        <div class="header">
            <h2 style="font-weight: bold">Header</h2>
        </div>

        <div class="left-sidebar">
            <h2 style="font-weight: bold">Left Sidebar</h2>
            <div>
                <router-link to="/first">First</router-link>
            </div>
            <div>
                <router-link to="/second">Second</router-link>
            </div>
        </div>

        <div class="content">
            <h2 style="font-weight: bold; border: 1px dashed blue; width: 100%">Content</h2>
            <router-view></router-view>
        </div>

        <div class="footer">
            <h2 style="font-weight: bold">Footer</h2>
        </div>

    </div>
</template>

<script src="./todo.module.js"></script>