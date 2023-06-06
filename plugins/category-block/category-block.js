(function (blocks, element, components, editor) {
    let el = element.createElement;
    let InnerBlocks = editor.InnerBlocks;
    let RichText = editor.RichText;

    let blockStyle = {
        padding: '20px',
        color: '#FFFFFF',
        marginBottom: '20px',
    };

    let categoryColors = {
        nacional: {
            backgroundColor: '#00B049',
        },
        entretenimiento: {
            backgroundColor: '#FFC915',
        },
        tecnologia: {
            backgroundColor: '#00D3F8',
        },
        mascotas: {
            backgroundColor: '#90456D',
        },
        deportes: {
            backgroundColor: '#FF372C',
        },
    };

    blocks.registerBlockType('category-block/category-block', {
        title: 'Bloque de Categoría',
        description: 'Un bloque personalizado para mostrar títulos y descripciones con estilos basados en la categoría.',
        category: 'common',
        attributes: {
            title: {
                type: 'array',
                source: 'children',
                selector: 'h2',
            },
            description: {
                type: 'array',
                source: 'children',
                selector: 'p',
            },
            category: {
                type: 'string',
                default: 'nacional',
            },
        },
        edit: function (props) {
            let setAttributes = props.setAttributes;
            let attributes = props.attributes;

            let onChangeTitle = function (title) {
                setAttributes({ title: title });
            };

            let onChangeDescription = function (description) {
                setAttributes({ description: description });
            };

            let onSelectCategory = function (category) {
                setAttributes({ category: category });
            };
            return el(
                'div',
                { style: { ...categoryColors[attributes.category], ...blockStyle }, className: 'category-block' },
                el(RichText, {
                    tagName: 'h2',
                    placeholder: 'Título',
                    value: attributes.title,
                    onChange: onChangeTitle,
                }),
                el(RichText, {
                    tagName: 'p',
                    placeholder: 'Descripción',
                    value: attributes.description,
                    onChange: onChangeDescription,
                }),
                el(components.PanelRow, null,
                    el(components.PanelBody, { title: 'Categoría', initialOpen: true },
                        el(components.ButtonGroup, null,
                            el(components.Button, {
                                isSmall: true,
                                isPrimary: attributes.category === 'nacional',
                                onClick: function () {
                                    onSelectCategory('nacional');
                                },
                            }, 'Nacional'),
                            el(components.Button, {
                                isSmall: true,
                                isPrimary: attributes.category === 'entretenimiento',
                                onClick: function () {
                                    onSelectCategory('entretenimiento');
                                },
                            }, 'Entretenimiento'),
                            el(components.Button, {
                                isSmall: true,
                                isPrimary: attributes.category === 'tecnologia',
                                onClick: function () {
                                    onSelectCategory('tecnologia');
                                },
                            }, 'Tecnología'),
                            el(components.Button, {
                                isSmall: true,
                                isPrimary: attributes.category === 'mascotas',
                                onClick: function () {
                                    onSelectCategory('mascotas');
                                },
                            }, 'Mascotas'),
                            el(components.Button, {
                                isSmall: true,
                                isPrimary: attributes.category === 'deportes',
                                onClick: function () {
                                    onSelectCategory('deportes');
                                },
                            }, 'Deportes')
                        )
                    )
                )
            );
        },
        save: function (props) {
            let attributes = props.attributes;

            return el(
                'div',
                { style: { ...categoryColors[attributes.category], ...blockStyle }, className: 'category-block' },
                el('h2', null, attributes.title),
                el('p', null, attributes.description)
            );
        },
    });
})(
    window.wp.blocks,
    window.wp.element,
    window.wp.components,
    window.wp.editor
);