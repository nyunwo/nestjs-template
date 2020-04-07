import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { join } from 'path'

const definitionsFactory = new GraphQLDefinitionsFactory()
definitionsFactory.generate({
	typePaths: ['./src/modules/**/*.graphql'],
	path: join(process.cwd(), 'src/generated/graphql.schema.ts'),
	outputAs: 'class',
	debug: true
})
