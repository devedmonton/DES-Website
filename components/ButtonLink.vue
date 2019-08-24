.<template>
    <nuxt-link
        class="inline-block align-middle text-center text-white select-none border font-normal whitespace-no-wrap py-2 px-4 rounded text-base leading-normal no-underline bg-blue-500 hover:bg-blue-600"
        :to="href"
    >
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
