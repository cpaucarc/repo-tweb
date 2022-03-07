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
                            <svg
                                role="img"
                                fill="currentColor"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <title>Microsoft Outlook</title>
                                <path
                                    d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.21.57.55.22.34.31.77.1.43.1.88zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5V2.55q0-.44.3-.75.3-.3.75-.3h12.9q.44 0 .75.3.3.3.3.75V10.85l1.24.72h.01q.1.07.18.18.07.12.07.25zm-6-8.25v3h3v-3zm0 4.5v3h3v-3zm0 4.5v1.83l3.05-1.83zm-5.25-9v3h3.75v-3zm0 4.5v3h3.75v-3zm0 4.5v2.03l2.41 1.5 1.34-.8v-2.73zM9 3.75V6h2l.13.01.12.04v-2.3zM5.98 15.98q.9 0 1.6-.3.7-.32 1.19-.86.48-.55.73-1.28.25-.74.25-1.61 0-.83-.25-1.55-.24-.71-.71-1.24t-1.15-.83q-.68-.3-1.55-.3-.92 0-1.64.3-.71.3-1.2.85-.5.54-.75 1.3-.25.74-.25 1.63 0 .85.26 1.56.26.72.74 1.23.48.52 1.17.81.69.3 1.56.3zM7.5 21h12.39L12 16.08V17q0 .41-.3.7-.29.3-.7.3H7.5zm15-.13v-7.24l-5.9 3.54Z"
                                />
                            </svg>
                            <p>{{ proyecto.autor.correo }}</p>
                        </div>
                        <div class="flex">
                            <svg
                                role="img"
                                fill="currentColor"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <title>WhatsApp</title>
                                <path
                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                                />
                            </svg>
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
                            <li v-for="(archivo, i) in proyecto.archivos" :key="i">
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