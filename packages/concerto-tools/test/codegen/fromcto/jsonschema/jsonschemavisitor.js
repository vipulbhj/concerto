/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const chai = require('chai');
chai.should();
const sinon = require('sinon');

const JSONSchemaVisitor = require('../../../../lib/codegen/fromcto/jsonschema/jsonschemavisitor.js');

const AssetDeclaration = require('@accordproject/concerto-core').AssetDeclaration;
const ClassDeclaration = require('@accordproject/concerto-core').ClassDeclaration;
const EnumDeclaration = require('@accordproject/concerto-core').EnumDeclaration;
const ConceptDeclaration = require('@accordproject/concerto-core').ConceptDeclaration;
const EnumValueDeclaration = require('@accordproject/concerto-core').EnumValueDeclaration;
const Field = require('@accordproject/concerto-core').Field;
const ModelFile = require('@accordproject/concerto-core').ModelFile;
const ModelManager = require('@accordproject/concerto-core').ModelManager;
const RelationshipDeclaration = require('@accordproject/concerto-core').RelationshipDeclaration;
const TransactionDeclaration = require('@accordproject/concerto-core').TransactionDeclaration;
const fileWriter = require('@accordproject/concerto-core').FileWriter;

describe('JSONSchema', function () {
    let jsonSchemaVisit;
    let mockFileWriter;
    beforeEach(() => {
        jsonSchemaVisit = new JSONSchemaVisitor();
        mockFileWriter = sinon.createStubInstance(fileWriter);
    });

    describe('visit', () => {
        let param;
        beforeEach(() => {
            param = {
                property1: 'value1'
            };
        });

        it('should call visitModelManager for a ModelManager', () => {
            let thing = sinon.createStubInstance(ModelManager);
            thing._isModelManager = true;
            let mockSpecialVisit = sinon.stub(jsonSchemaVisit, 'visitModelManager');
            mockSpecialVisit.returns('Duck');

            jsonSchemaVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitModelFile for a ModelFile', () => {
            let thing = sinon.createStubInstance(ModelFile);
            thing._isModelFile = true;
            let mockSpecialVisit = sinon.stub(jsonSchemaVisit, 'visitModelFile');
            mockSpecialVisit.returns('Duck');

            jsonSchemaVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitAssetDeclaration for a AssetDeclaration', () => {
            let thing = sinon.createStubInstance(AssetDeclaration);
            thing._isAssetDeclaration = true;
            let mockSpecialVisit = sinon.stub(jsonSchemaVisit, 'visitAssetDeclaration');
            mockSpecialVisit.returns('Duck');

            jsonSchemaVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitTransactionDeclaration for a TransactionDeclaration', () => {
            let thing = sinon.createStubInstance(TransactionDeclaration);
            thing._isTransactionDeclaration = true;
            let mockSpecialVisit = sinon.stub(jsonSchemaVisit, 'visitTransactionDeclaration');
            mockSpecialVisit.returns('Duck');

            jsonSchemaVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitEnumDeclaration for a EnumDeclaration', () => {
            let thing = sinon.createStubInstance(EnumDeclaration);
            thing._isEnumDeclaration = true;
            let mockSpecialVisit = sinon.stub(jsonSchemaVisit, 'visitEnumDeclaration');
            mockSpecialVisit.returns('Duck');

            jsonSchemaVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitConceptDeclaration for a ConceptDeclaration', () => {
            let thing = sinon.createStubInstance(ConceptDeclaration);
            thing._isConceptDeclaration = true;
            let mockSpecialVisit = sinon.stub(jsonSchemaVisit, 'visitConceptDeclaration');
            mockSpecialVisit.returns('Duck');

            jsonSchemaVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitClassDeclaration for a ClassDeclaration', () => {
            let thing = sinon.createStubInstance(ClassDeclaration);
            thing._isClassDeclaration = true;
            let mockSpecialVisit = sinon.stub(jsonSchemaVisit, 'visitClassDeclaration');
            mockSpecialVisit.returns('Duck');

            jsonSchemaVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitField for a Field', () => {
            let thing = sinon.createStubInstance(Field);
            thing._isField = true;
            let mockSpecialVisit = sinon.stub(jsonSchemaVisit, 'visitField');
            mockSpecialVisit.returns('Duck');

            jsonSchemaVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitRelationshipDeclaration for a RelationshipDeclaration', () => {
            let thing = sinon.createStubInstance(RelationshipDeclaration);
            thing._isRelationshipDeclaration = true;
            let mockSpecialVisit = sinon.stub(jsonSchemaVisit, 'visitRelationshipDeclaration');
            mockSpecialVisit.returns('Duck');

            jsonSchemaVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitEnumValueDeclaration for a EnumValueDeclaration', () => {
            let thing = sinon.createStubInstance(EnumValueDeclaration);
            thing._isEnumValueDeclaration = true;
            let mockSpecialVisit = sinon.stub(jsonSchemaVisit, 'visitEnumValueDeclaration');
            mockSpecialVisit.returns('Goose');

            jsonSchemaVisit.visit(thing, param).should.deep.equal('Goose');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should throw an error when an unrecognised type is supplied', () => {
            let thing = 'Something of unrecognised type';

            (() => {
                jsonSchemaVisit.visit(thing, param);
            }).should.throw('Unrecognised type: string, value: \'Something of unrecognised type\'');
        });
    });

    describe('visitModelManager', () => {
        it('should return a value of the concatenated output of each modelFiles accept', () => {
            let param = {};

            let mockModelFile = sinon.createStubInstance(ModelFile);
            mockModelFile._isModelFile = true;
            mockModelFile.accept.returns(['Duck', 'Duck']);
            let mockModelFile2 = sinon.createStubInstance(ModelFile);
            mockModelFile2._isModelFile = true;
            mockModelFile2.accept.returns(['Duck', 'Goose']);

            let mockModelManager = sinon.createStubInstance(ModelManager);
            mockModelManager._isModelManager = true;
            mockModelManager.getModelFiles.returns([mockModelFile, mockModelFile2]);

            jsonSchemaVisit.visitModelManager(mockModelManager, param).should.deep.equal(['Duck', 'Duck', 'Duck', 'Goose']);
            mockModelFile.accept.withArgs(jsonSchemaVisit, param).calledOnce.should.be.ok;
            mockModelFile2.accept.withArgs(jsonSchemaVisit, param).calledOnce.should.be.ok;
            param.should.deep.equal({
                modelManager: mockModelManager
            });
        });
    });

    describe('visitModelFile', () => {
        it('should return an array of each declaration\'s accept filtering out abstract ones', () => {
            let param = {};

            let mockAssetDeclaration = sinon.createStubInstance(AssetDeclaration);
            mockAssetDeclaration._isAssetDeclaration = true;
            mockAssetDeclaration.accept.returns('Duck');
            mockAssetDeclaration.isAbstract.returns(false);
            let mockAssetDeclarationAbstract = sinon.createStubInstance(AssetDeclaration);
            mockAssetDeclarationAbstract._isAssetDeclaration = true;
            mockAssetDeclarationAbstract.accept.returns('Fish');
            mockAssetDeclarationAbstract.isAbstract.returns(true);

            let mockTransactionDeclaration = sinon.createStubInstance(TransactionDeclaration);
            mockTransactionDeclaration._isTransactionDeclaration = true;
            mockTransactionDeclaration.accept.returns('Duck');
            mockTransactionDeclaration.isAbstract.returns(false);
            let mockTransactionDeclarationAbstract = sinon.createStubInstance(TransactionDeclaration);
            mockTransactionDeclarationAbstract._isTransactionDeclaration = true;
            mockTransactionDeclarationAbstract.accept.returns('Fish');
            mockTransactionDeclarationAbstract.isAbstract.returns(true);

            let mockConceptDeclaration = sinon.createStubInstance(ConceptDeclaration);
            mockConceptDeclaration._isConceptDeclaration = true;
            mockConceptDeclaration.accept.returns('Goose');
            mockConceptDeclaration.isAbstract.returns(false);
            let mockConceptDeclarationAbstract = sinon.createStubInstance(ConceptDeclaration);
            mockConceptDeclarationAbstract._isConceptDeclaration = true;
            mockConceptDeclarationAbstract.accept.returns('Fish');
            mockConceptDeclarationAbstract.isAbstract.returns(true);

            let mockModelFile = sinon.createStubInstance(ModelFile);
            mockModelFile._isModelFile = true;
            mockModelFile.getNamespace.returns;
            mockModelFile.getAssetDeclarations.returns([mockAssetDeclaration, mockAssetDeclarationAbstract]);
            mockModelFile.getTransactionDeclarations.returns([mockTransactionDeclaration, mockTransactionDeclarationAbstract]);
            mockModelFile.getConceptDeclarations.returns([mockConceptDeclaration, mockConceptDeclarationAbstract]);

            jsonSchemaVisit.visitModelFile(mockModelFile, param).should.deep.equal(['Duck', 'Duck', 'Goose']);

            param.should.deep.equal({
                first: true,
                modelFile: mockModelFile
            });
        });
    });

    describe('visitAssetDeclaration', () => {
        it('should return the result of visitClassDeclarationCommon', () => {
            let param = {
                first: false
            };

            let mockAssetDeclaration = sinon.createStubInstance(AssetDeclaration);
            mockAssetDeclaration._isAssetDeclaration = true;
            mockAssetDeclaration.getName.returns('Bob');

            let mockVisitClassDeclarationCommon = sinon.stub(jsonSchemaVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockAssetDeclaration, param, {}).returns('Class Declaration');

            jsonSchemaVisit.visitAssetDeclaration(mockAssetDeclaration, param).should.deep.equal('Class Declaration');
        });

        it('should build the JSONSchema and return the result of visitClassDeclarationCommon', () => {
            let param = {
                first: true
            };

            let mockAssetDeclaration = sinon.createStubInstance(AssetDeclaration);
            mockAssetDeclaration._isAssetDeclaration = true;
            mockAssetDeclaration.getName.returns('Bob');

            let mockVisitClassDeclarationCommon = sinon.stub(jsonSchemaVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockAssetDeclaration, param, {
                $schema: 'http://json-schema.org/draft-04/schema#',
                title: 'Bob',
                description: 'An asset named Bob'
            }).returns('Class Declaration');

            jsonSchemaVisit.visitAssetDeclaration(mockAssetDeclaration, param).should.deep.equal('Class Declaration');
            param.should.have.property('first', false);
        });
    });

    describe('visitTransactionDeclaration', () => {
        it('should return the result of visitClassDeclarationCommon', () => {
            let param = {
                first: false
            };

            let mockTransactionDeclaration = sinon.createStubInstance(TransactionDeclaration);
            mockTransactionDeclaration._isTransactionDeclaration = true;
            mockTransactionDeclaration.getName.returns('Bob');

            let mockVisitClassDeclarationCommon = sinon.stub(jsonSchemaVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockTransactionDeclaration, param, {}).returns('Class Declaration');

            jsonSchemaVisit.visitTransactionDeclaration(mockTransactionDeclaration, param).should.deep.equal('Class Declaration');
        });

        it('should build the JSONSchema and return the result of visitClassDeclarationCommon', () => {
            let param = {
                first: true
            };

            let mockTransactionDeclaration = sinon.createStubInstance(TransactionDeclaration);
            mockTransactionDeclaration._isTransactionDeclaration = true;
            mockTransactionDeclaration.getName.returns('Bob');

            let mockVisitClassDeclarationCommon = sinon.stub(jsonSchemaVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockTransactionDeclaration, param, {
                $schema: 'http://json-schema.org/draft-04/schema#',
                title: 'Bob',
                description: 'A transaction named Bob'
            }).returns('Class Declaration');

            jsonSchemaVisit.visitTransactionDeclaration(mockTransactionDeclaration, param).should.deep.equal('Class Declaration');
            param.should.have.property('first', false);
        });
    });

    describe('visitConceptDeclaration', () => {
        it('should return the result of visitClassDeclarationCommon', () => {
            let param = {
                first: false
            };

            let mockConceptDeclaration = sinon.createStubInstance(ConceptDeclaration);
            mockConceptDeclaration._isConceptDeclaration = true;
            mockConceptDeclaration.getName.returns('Bob');

            let mockVisitClassDeclarationCommon = sinon.stub(jsonSchemaVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockConceptDeclaration, param, {}).returns('Class Declaration');

            jsonSchemaVisit.visitConceptDeclaration(mockConceptDeclaration, param).should.deep.equal('Class Declaration');
        });

        it('should build the JSONSchema and return the result of visitClassDeclarationCommon', () => {
            let param = {
                first: true
            };

            let mockConceptDeclaration = sinon.createStubInstance(ConceptDeclaration);
            mockConceptDeclaration._isConceptDeclaration = true;
            mockConceptDeclaration.getName.returns('Bob');

            let mockVisitClassDeclarationCommon = sinon.stub(jsonSchemaVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockConceptDeclaration, param, {
                $schema: 'http://json-schema.org/draft-04/schema#',
                title: 'Bob',
                description: 'A concept named Bob'
            }).returns('Class Declaration');

            jsonSchemaVisit.visitConceptDeclaration(mockConceptDeclaration, param).should.deep.equal('Class Declaration');
            param.should.have.property('first', false);
        });
    });

    describe('visitClassDeclaration', () => {
        it('should return the result of visitClassDeclarationCommon', () => {
            let param = {};

            let mockClassDeclaration = sinon.createStubInstance(ClassDeclaration);
            mockClassDeclaration._isClassDeclaration = true;
            mockClassDeclaration.getName.returns('Bob');

            let mockVisitClassDeclarationCommon = sinon.stub(jsonSchemaVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockClassDeclaration, param, {}).returns('Class Declaration');

            jsonSchemaVisit.visitClassDeclaration(mockClassDeclaration, param).should.deep.equal('Class Declaration');
        });
    });

    describe('visitClassDeclarationCommon', () => {
        it('should return a created JSONSchema', () => {
            let param = {};
            let jsonSchema = {
                title: 'A schema',
                description: ' A particularly good schema'
            };

            let mockClassDeclaration = sinon.createStubInstance(ClassDeclaration);
            mockClassDeclaration._isClassDeclaration = true;
            mockClassDeclaration.getName.returns('Person');
            mockClassDeclaration.getFullyQualifiedName.returns('org.acme.Person');
            mockClassDeclaration.getProperties.returns([
                {
                    getName: () => {
                        return 'Bob';
                    },
                    isOptional: () => {
                        return true;
                    },
                    accept: () => {
                        return 'Guineapig';
                    }
                },
                {
                    getName: () => {
                        return 'Trevor';
                    },
                    isOptional: () => {
                        return false;
                    },
                    accept: () => {
                        return 'Goldfish';
                    }
                }
            ]);

            jsonSchemaVisit.visitClassDeclarationCommon(mockClassDeclaration, param, jsonSchema).should.deep.equal({
                title: 'A schema',
                description: ' A particularly good schema',
                type: 'object',
                properties: {
                    $class: {
                        type: 'string',
                        default: 'org.acme.Person',
                        description: 'The class identifier for this type'
                    },
                    Bob: 'Guineapig',
                    Trevor: 'Goldfish'
                },
                required: ['Trevor']
            });
        });

        it('should return a created JSONSchema autogenerating the description', () => {
            let param = {};
            let jsonSchema = {
                title: 'A schema'
            };

            let mockClassDeclaration = sinon.createStubInstance(ClassDeclaration);
            mockClassDeclaration._isClassDeclaration = true;
            mockClassDeclaration.getName.returns('Person');
            mockClassDeclaration.getFullyQualifiedName.returns('org.acme.Person');
            mockClassDeclaration.getProperties.returns([
                {
                    getName: () => {
                        return 'Bob';
                    },
                    isOptional: () => {
                        return true;
                    },
                    accept: () => {
                        return 'Guineapig';
                    }
                },
                {
                    getName: () => {
                        return 'Trevor';
                    },
                    isOptional: () => {
                        return false;
                    },
                    accept: () => {
                        return 'Goldfish';
                    }
                }
            ]);

            jsonSchemaVisit.visitClassDeclarationCommon(mockClassDeclaration, param, jsonSchema).should.deep.equal({
                title: 'A schema',
                description: 'An instance of org.acme.Person',
                type: 'object',
                properties: {
                    $class: {
                        type: 'string',
                        default: 'org.acme.Person',
                        description: 'The class identifier for this type'
                    },
                    Bob: 'Guineapig',
                    Trevor: 'Goldfish'
                },
                required: ['Trevor']
            });
        });

        it('should return a created top level JSONSchema ', () => {
            let param = {
                fileWriter: mockFileWriter
            };
            let jsonSchema = {
                $schema: true,
                title: 'A schema',
                description: ' A particularly good schema'
            };

            let mockClassDeclaration = sinon.createStubInstance(ClassDeclaration);
            mockClassDeclaration._isClassDeclaration = true;
            mockClassDeclaration.getName.returns('Person');
            mockClassDeclaration.getFullyQualifiedName.returns('org.acme.Person');
            mockClassDeclaration.getProperties.returns([
                {
                    getName: () => {
                        return 'Bob';
                    },
                    isOptional: () => {
                        return true;
                    },
                    accept: () => {
                        return 'Guineapig';
                    }
                },
                {
                    getName: () => {
                        return 'Trevor';
                    },
                    isOptional: () => {
                        return false;
                    },
                    accept: () => {
                        return 'Goldfish';
                    }
                }
            ]);
            let expectedResult = {
                $schema: true,
                title: 'A schema',
                description: ' A particularly good schema',
                type: 'object',
                properties: {
                    $class: {
                        type: 'string',
                        default: 'org.acme.Person',
                        description: 'The class identifier for this type'
                    },
                    Bob: 'Guineapig',
                    Trevor: 'Goldfish'
                },
                required: ['$class', 'Trevor']
            };
            jsonSchemaVisit.visitClassDeclarationCommon(mockClassDeclaration, param, jsonSchema).should.deep.equal(expectedResult);

            param.fileWriter.openFile.withArgs('org.acme.Person.json').calledOnce.should.be.ok;
            param.fileWriter.write.withArgs(JSON.stringify(expectedResult, null, 4)).calledOnce.should.be.ok;
            param.fileWriter.closeFile.calledOnce.should.be.ok;

            // should also work without a file writer
            param.fileWriter = null;
            jsonSchemaVisit.visitClassDeclarationCommon(mockClassDeclaration, param, jsonSchema).should.deep.equal(expectedResult);
        });
    });

    describe('visitField', () => {
        it('should return JSON schema for primitive string type', () => {
            let param = {};

            let mockField = sinon.createStubInstance(Field);
            mockField._isField = true;
            mockField.isPrimitive.returns(true);
            mockField.getType.returns('String');
            mockField.getName.returns('Farmer\'s');
            mockField.getParent.returns({
                getIdentifierFieldName: () => {
                    return 'Earth';
                }
            });

            jsonSchemaVisit.visitField(mockField, param).should.deep.equal({
                type: 'string'
            });
        });

        it('should return JSON schema for primitive double type', () => {
            let param = {};

            let mockField = sinon.createStubInstance(Field);
            mockField._isField = true;
            mockField.isPrimitive.returns(true);
            mockField.getType.returns('Double');
            mockField.getName.returns('Farmer\'s');
            mockField.getParent.returns({
                getIdentifierFieldName: () => {
                    return 'Earth';
                }
            });

            jsonSchemaVisit.visitField(mockField, param).should.deep.equal({
                type: 'number'
            });
        });

        it('should return JSON schema for primitive integer type', () => {
            let param = {};

            let mockField = sinon.createStubInstance(Field);
            mockField._isField = true;
            mockField.isPrimitive.returns(true);
            mockField.getType.returns('Integer');
            mockField.getName.returns('Farmer\'s');
            mockField.getParent.returns({
                getIdentifierFieldName: () => {
                    return 'Earth';
                }
            });

            jsonSchemaVisit.visitField(mockField, param).should.deep.equal({
                type: 'integer'
            });
        });

        it('should return JSON schema for primitive long type', () => {
            let param = {};

            let mockField = sinon.createStubInstance(Field);
            mockField._isField = true;
            mockField.isPrimitive.returns(true);
            mockField.getType.returns('Long');
            mockField.getName.returns('Farmer\'s');
            mockField.getParent.returns({
                getIdentifierFieldName: () => {
                    return 'Earth';
                }
            });

            jsonSchemaVisit.visitField(mockField, param).should.deep.equal({
                type: 'integer'
            });
        });

        it('should return JSON schema for primitive DateTime type', () => {
            let param = {};

            let mockField = sinon.createStubInstance(Field);
            mockField._isField = true;
            mockField.isPrimitive.returns(true);
            mockField.getType.returns('DateTime');
            mockField.getName.returns('Farmer\'s');
            mockField.getParent.returns({
                getIdentifierFieldName: () => {
                    return 'Earth';
                }
            });

            jsonSchemaVisit.visitField(mockField, param).should.deep.equal({
                type: 'string',
                format: 'date-time'
            });
        });

        it('should return JSON schema for primitive boolean type', () => {
            let param = {};

            let mockField = sinon.createStubInstance(Field);
            mockField._isField = true;
            mockField.isPrimitive.returns(true);
            mockField.getType.returns('Boolean');
            mockField.getName.returns('Farmer\'s');
            mockField.getParent.returns({
                getIdentifierFieldName: () => {
                    return 'Earth';
                }
            });

            jsonSchemaVisit.visitField(mockField, param).should.deep.equal({
                type: 'boolean'
            });
        });

        it('should return JSON schema for primitive type adding in the default', () => {
            let param = {};

            let mockField = sinon.createStubInstance(Field);
            mockField._isField = true;
            mockField.isPrimitive.returns(true);
            mockField.getType.returns('String');
            mockField.getName.returns('Farmer\'s');
            mockField.getDefaultValue.returns('Ploughed');
            mockField.getParent.returns({
                getIdentifierFieldName: () => {
                    return 'Earth';
                }
            });

            jsonSchemaVisit.visitField(mockField, param).should.deep.equal({
                type: 'string',
                default: 'Ploughed'
            });
        });

        it('should return JSON schema for primitive type marking it as identifier', () => {
            let param = {};

            let mockField = sinon.createStubInstance(Field);
            mockField._isField = true;
            mockField.isPrimitive.returns(true);
            mockField.getType.returns('String');
            mockField.getName.returns('Earth');
            mockField.getParent.returns({
                getIdentifierFieldName: () => {
                    return 'Earth';
                }
            });

            jsonSchemaVisit.visitField(mockField, param).should.deep.equal({
                type: 'string',
                description : 'The instance identifier for this type'
            });
        });

        it('should return the JSON schema for a non primitive type', () => {
            let mockModelFile = sinon.createStubInstance(ModelFile);
            mockModelFile._isModelFile = true;
            let mockModelManager = sinon.createStubInstance(ModelManager);
            mockModelFile.getModelManager.returns(mockModelManager);

            mockModelManager.getType.withArgs('Crop').returns({
                accept: () => {
                    return;
                }
            });

            let param = {
                modelFile: mockModelFile
            };

            let mockAccept = sinon.stub(mockModelManager.getType('Crop'), 'accept');
            mockAccept.returns({status: 'Ploughed'});

            let mockField = sinon.createStubInstance(Field);
            mockField._isField = true;
            mockField.isPrimitive.returns(false);
            mockField.getFullyQualifiedTypeName.returns('Crop');

            jsonSchemaVisit.visitField(mockField, param).should.deep.equal({status: 'Ploughed'});

        });

        it('should return a schema with type array and the items', () => {
            let param = {};

            let mockField = sinon.createStubInstance(Field);
            mockField._isField = true;
            mockField.isPrimitive.returns(true);
            mockField.getType.returns('String');
            mockField.getName.returns('Farmer\'s');
            mockField.isArray.returns(true);
            mockField.getParent.returns({
                getIdentifierFieldName: () => {
                    return 'Earth';
                }
            });

            jsonSchemaVisit.visitField(mockField, param).should.deep.equal({
                type: 'array',
                items: {
                    type: 'string'
                }
            });
        });
    });

    describe('visitEnumDeclaration', () => {
        it('should return the JSON schema for an enum', () => {
            let param = {};

            let mockEnumDeclaration = sinon.createStubInstance(EnumDeclaration);
            mockEnumDeclaration._isEnumDeclaration = true;
            mockEnumDeclaration.getProperties.returns([{
                accept: () => {
                    return 'Rabbit';
                }
            },
            {
                accept: () => {
                    return 'Pheasant';
                }
            }]);

            jsonSchemaVisit.visitEnumDeclaration(mockEnumDeclaration, param).should.deep.equal({
                enum: ['Rabbit', 'Pheasant']
            });
        });
    });

    describe('visitEnumValueDeclaration', () => {
        it('should return the name of the value', () => {
            let param = {};

            let mockEnumValueDeclaration = sinon.createStubInstance(EnumValueDeclaration);
            mockEnumValueDeclaration._isEnumValueDeclaration = true;
            mockEnumValueDeclaration.getName.returns('Bob');

            jsonSchemaVisit.visitEnumValueDeclaration(mockEnumValueDeclaration, param).should.deep.equal('Bob');
        });
    });

    describe('visitRelationshipDeclaration', () => {
        it('should return the schema for a relationship', () => {
            let param = {};

            let mockRelationshipDeclaration = sinon.createStubInstance(RelationshipDeclaration);
            mockRelationshipDeclaration._isRelationshipDeclaration = true;
            mockRelationshipDeclaration.getName.returns('Bob');
            mockRelationshipDeclaration.getFullyQualifiedTypeName.returns('org.acme.Person');
            mockRelationshipDeclaration.isArray.returns(false);

            jsonSchemaVisit.visitRelationshipDeclaration(mockRelationshipDeclaration, param).should.deep.equal({
                type: 'string',
                description: 'The identifier of an instance of org.acme.Person'
            });
        });

        it('should return the schema for a relationship that is an array', () => {
            let param = {};

            let mockRelationshipDeclaration = sinon.createStubInstance(RelationshipDeclaration);
            mockRelationshipDeclaration._isRelationshipDeclaration = true;
            mockRelationshipDeclaration.getName.returns('Bob');
            mockRelationshipDeclaration.getFullyQualifiedTypeName.returns('org.acme.Person');
            mockRelationshipDeclaration.isArray.returns(true);

            jsonSchemaVisit.visitRelationshipDeclaration(mockRelationshipDeclaration, param).should.deep.equal({
                type: 'array',
                items: {
                    type: 'string',
                    description: 'The identifier of an instance of org.acme.Person'
                }
            });
        });
    });
});