import { useState } from "react";

import X from "../assets/icons/x.svg?react";
import Trash from "../assets/icons/trash.svg?react";
import Check from "../assets/icons/check.svg?react";
import Pencil from "../assets/icons/pencil.svg?react";

import { Card } from "../components/card";
import { Text } from "../components/text";
import { InputText } from "../components/input-text";
import { ButtonIcon } from "../components/button-icon";
import { InputCheckbox } from "../components/input-checkbox";

export function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputCheckbox />
          <Text className="flex-1">🛒 Fazer compras da semana</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={Trash} variant="tertiary" />
            <ButtonIcon
              icon={Pencil}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={X}
              variant="secondary"
              onClick={handleExitEditTask}
            />
            <ButtonIcon icon={Check} variant="primary" />
          </div>
        </>
      )}
    </Card>
  );
}
