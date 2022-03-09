<template>
    <div class="columnas-2">
        <div>
            <div class="card">
                <template v-for="(portada, i) in proyecto.portadas" :key="i">
                    <img class="portada" :src="portada" alt="Portada" />
                </template>
                <h3>{{ proyecto.titulo }}</h3>
                <div>
                    <BadgeTag v-for="tag in proyecto.tags" :key="tag" :tag="tag" />
                </div>
            </div>
            <br />
            <div class="card">
                <div class="flex">
                    <img class="avatar" :src="proyecto.autor.avatar" alt="Foto" />
                    <div>
                        <h4>{{ proyecto.autor.nombre }}</h4>
                        <p>{{ proyecto.autor.escuela }}-{{ proyecto.autor.facultad }}</p>
                        <br />
                        <div class="flex">
                            <span class="material-icons">mail_outline</span>
                            <p>{{ proyecto.autor.correo }}</p>
                        </div>
                        <div class="flex">
                            <span class="material-icons">phone</span>
                            <p>{{ proyecto.autor.telefono }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="flex">
                <h2>Resumen</h2>
                <Dropdown>
                    <template #trigger>
                        <button>Ver documentos</button>
                    </template>
                    <template #opciones>
                        <ul>
                            <li class="flex" v-for="(archivo, i) in proyecto.archivos" :key="i">
                                <span class="material-icons">description</span>
                                <a target="_blank" :href="archivo">Documento {{ i + 1 }}</a>
                            </li>
                        </ul>
                    </template>
                </Dropdown>
            </div>
            <p>{{ proyecto.resumen }}</p>
        </div>
    </div>

    <br />

    <div class="card">
        <h3>Proyectos Similares</h3>
        <div class="columnas-3">
            <div v-for="similar in proyecto.similares" :key="similar.id">
                <img class="portada" :src="similar.portada" alt="Portada" />
                <p>{{ similar.titulo }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import proyectoData from '../hooks/proyecto.json';
import BadgeTag from '../components/BadgeTag.vue';
import Dropdown from '../components/Dropdown.vue';
import PrimaryLink from '../components/Link/PrimaryLink.vue';

export default {
    name: "Proyecto",
    components: { BadgeTag, Dropdown, PrimaryLink },
    setup() {
        const proyecto = proyectoData;
        return { proyecto };
    }
}
</script>

<style scoped>
.columnas-2 {
    align-items: flex-start;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}
.columnas-3 {
    align-items: flex-start;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
}
.portada {
    aspect-ratio: 2/1;
    border-radius: 10px;
    height: auto;
    object-fit: cover;
    overflow: hidden;
    width: 100%;
}

.flex {
    display: flex;
    align-items: center;
    column-gap: 1rem;
}
.card {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    padding: 15px;
    color: #4b5563;
}

.avatar {
    border-radius: 999px;
    height: 72px;
    width: 72px;
}
</style>