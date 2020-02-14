import React, {ChangeEvent, FormEvent, useState} from "react";
import {useTranslation} from "../../lib/hooks";
import {Box, Button, Form, FormField, Grid, Select, TextInput} from "grommet";
import {event} from "next/dist/build/output/log";

function onWordFormSubmit(event: FormEvent) {
    console.log(event);
}

export default function MainPage() {
    const word = useTranslation('word');
    const nest = useTranslation('nest');
    const pos = useTranslation('pos');
    const affixes = useTranslation('affixes');
    const prefixes = useTranslation('prefixes');
    const send = useTranslation('send');

    return <Grid>
        <Box
            align="center"
            border={{ size: 'medium' }}
            pad="large"
        >
            <Form onSubmit={onWordFormSubmit}>
                <FormField name="value" label={word} />
                <FormField name="nest" label={nest} />
                <FormField
                    name="partId"
                    label={pos}
                    component={Select}
                    options={[]}
                />
                <FormField name="suffixes" label={affixes} />
                <FormField name="prefixes" label={prefixes} />

                <Button type="submit" primary label={send} />
            </Form>
        </Box>
    </Grid>;
}