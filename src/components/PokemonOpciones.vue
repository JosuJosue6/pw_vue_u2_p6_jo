<template>
    <div class="opciones-container">

        <ul>
            <li> 1 </li>
            <li> 2 </li>
            <li> 3 </li>
            <li> 4 </li>
        </ul>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul {
    list-style-type: none;

}

li {
    border: 1px solid rgb(0, 0, 0, 1);
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5px;
    width: 250px;
    background: white;

}

li:hover {
    background: rgb(0, 0, 0, 0.2);
}

.opciones-container {
    display: flex;
    justify-content: center;
}
</style>