<template>
    <div class="portfolio-filter-container">
        <ul class="list-control">
            <li class="portfolio-filter-item" v-for="(elem, index) in portfolioFilter.filters"
                v-on:click.self="onClick(elem); currentElem =
                index" v-bind:class="{active: index === currentElem && index > 0}">
                {{ elem }}
            </li>
        </ul>
    </div>
</template>

<script>
    import "./_portfolio-filter.scss"

    export default {
        name: "portfolio-filter",
        data: function () {
            return {
                portfolioFilter: {
                    filters: [
                        'All',
                        'Audio',
                        'Development',
                        'Web',
                        'Print Design',
                        'Motion Graphics'
                    ]
                },
                currentElem: ''
            }
        },
        methods: {
            onClick: function (filter) {
                if (filter === 'All') {
                    this.filters.splice(0);
                }
                else {
                    if (this.filters.indexOf(filter.toLowerCase()) < 0) {
                        this.filters.splice(0);
                        this.filters.push(filter.toLowerCase());
                    }
                }
            }
        },
        props: ['filters']
    }
</script>
