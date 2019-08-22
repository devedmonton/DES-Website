.<template>
    <nuxt-link class="button" :to="href">
        <div>
            <slot></slot>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: '#0',
        },
    },
}
</script>

<style>
.button {
    display: inline-block;
}
</style>
