<template>
    <a :href="href" class="primary-link">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: 'PrimaryLink',
    props: {
        href: {
            type: String,
            default: "#"
        }
    }
}
</script>

<style scoped>
.primary-link {
    background-color: #6962a8;
    border-radius: 10px;
    color: white;
    font-size: 0.875rem;
    padding: 5px 15px;
    text-decoration: none;
}
.primary-link:hover {
    background-color: #5b539f;
}
</style>