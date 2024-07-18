# Defina o nome do instalador e onde ele será criado
OutFile "GymManagerInstaller.exe"

# Defina o diretório de instalação
InstallDir "$PROGRAMFILES\GymManager"

# Páginas do instalador
Page directory
Page instfiles

# Crie uma seção de instalação
Section "Install"

  # Crie o diretório de instalação
  SetOutPath $INSTDIR

  # Copie todos os arquivos do diretório atual para o diretório de instalação
  File /r "*"

  # Crie um atalho no desktop
  CreateShortcut "$DESKTOP\GymManager.lnk" "$INSTDIR\start.exe"

SectionEnd

# Seção de desinstalação
Section "Uninstall"

  # Remova todos os arquivos do diretório de instalação
  RMDir /r "$INSTDIR"

  # Remova o atalho do desktop
  Delete "$DESKTOP\GymManager.lnk"

SectionEnd


# Verificar se o Node.js está instalado e, se não, instalar
Section "Check Node.js"

  # Verificar se o Node.js já está instalado
  ReadRegStr $0 HKLM "Software\Node.js" "" ; Verifique o registro do Windows para verificar a instalação do Node.js
  StrCmp $0 "" nodejs_not_installed ; Se não estiver instalado, vá para a seção de instalação do Node.js

  Goto nodejs_installed

nodejs_not_installed:

  # Executar o instalador do Node.js silenciosamente
  ExecWait '"$INSTDIR\nodejs_installer.msi" /S'

nodejs_installed:

SectionEnd