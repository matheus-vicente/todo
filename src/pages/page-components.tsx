import Plus from "../assets/icons/plus.svg?react";
import Trash from "../assets/icons/trash.svg?react";
import Pencil from "../assets/icons/pencil.svg?react";

import { Text } from "../components/text";
import { ButtonIcon } from "../components/button-icon";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Skeleton } from "../components/skeleton";
import { Card } from "../components/card";
import { Container } from "../components/container";
import { InputText } from "../components/input-text";
import { InputCheckbox } from "../components/input-checkbox";

export function PageComponents() {
  return (
    <Container>
      <div className="flex flex-col gap-1">
        <Text>Olá Mundo - variant default</Text>
        <Text variant="body-sm-bold">Olá Mundo - variant body-sm-bold</Text>
        <Text variant="body-md-bold">Olá Mundo - variant body-md-bold</Text>
      </div>
      <hr className="my-2" />
      <div className="flex gap-1">
        <ButtonIcon icon={Pencil} />
        <ButtonIcon variant="secondary" icon={Trash} />
        <ButtonIcon variant="tertiary" icon={Plus} />
      </div>
      <hr className="my-2" />
      <div className="flex gap-1">
        <Badge>5</Badge>
        <Badge variant="secondary">10</Badge>
      </div>
      <hr className="my-2" />
      <div className="flex gap-1">
        <Button>Adicionar</Button>
        <Button icon={Plus}>Adicionar</Button>
        <Button icon={Plus} disabled>
          Adicionar
        </Button>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col gap-2">
        <ButtonIcon loading icon={Plus} />
        <Badge loading />
        <Skeleton className="w-40 h-10" />
      </div>
      <hr className="my-2" />
      <Card>Isso é um Card</Card>
      <hr className="my-2" />
      <div className="flex gap-2">
        <InputText />
        <InputText disabled />
      </div>
      <hr className="my-2" />
      <div className="flex gap-2">
        <InputCheckbox />
        <InputCheckbox disabled />
        <InputCheckbox loading />
      </div>
      <hr className="my-2" />
    </Container>
  );
}
