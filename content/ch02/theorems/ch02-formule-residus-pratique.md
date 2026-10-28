---
id: ch02-formule-residus-pratique
type: proposition
chapter: 2
title: Formule des résidus pour le bord d'un domaine (forme pratique)
ref: Formule (II.6.1)
page: 48
importance: 3
depends: [ch02-formule-residus, ch02-indice-invariance-homotopie, ch02-indice-cercle, ch02-jordan-remarque, ch02-indice-entier-localement-constant, ch02-localement-fini-caracterisations]
tags: [residus, contour, calcul-integrales, indice, orientation]
---
## Intuition

> 💡 C'est la version « mode d'emploi » de la formule des résidus : on dessine une région $U$ (disque, demi-disque, secteur, rectangle...), on parcourt son bord **une fois, l'intérieur à gauche**, et l'intégrale de $f$ sur ce bord vaut $2i\pi$ fois la **somme des résidus des pôles situés à l'intérieur**. Les indices ont disparu : ils valent $1$ dedans, $0$ dehors.

Dans le Théorème II.5.1 ([[ch02-formule-residus]]), chaque pôle $s$ est pondéré par l'indice $\Ind_s(\gamma)$, le nombre de tours de $\gamma$ autour de $s$ ([[ch02-indice-def]]). Quand $\gamma$ est le bord d'un domaine parcouru une fois dans le sens direct, ce nombre de tours vaut $1$ pour les points de $U$ et $0$ pour les points extérieurs : la formule se simplifie en $\int_\gamma f=2i\pi\sum_{s\in U}\Res_s(f)$. C'est la forme utilisée dans **tous** les calculs d'intégrales.

Vocabulaire : un lacet $\gamma:[0,1]\to\C$ est **simple** si $\gamma(x)=\gamma(y)$ entraîne $x=y$ ou $\{x,y\}=\{0,1\}$ (il ne repasse jamais par le même point) ; $\mathcal M(\Omega)$ est l'ensemble des fonctions **méromorphes** sur $\Omega$ ([[ch02-pole-meromorphe-def]]) ; $\Res_s(f)$ est le **résidu** de $f$ en $s$ ([[ch02-residu-def]]).

## Énoncé

**Proposition (poly, Formule (II.6.1), p. 48).** *(Méthode donnée sans preuve dans le poly, « à justifier au cas par cas ».)* Soit $U$ un ouvert connexe borné de $\C$ dont le bord est l'image d'un lacet **simple** $\gamma$ de classe $C^1$ par morceaux (disque, demi-disque, secteur angulaire d'un disque, triangle, polygone...). On suppose $\gamma$ orienté dans le **sens direct**, c'est-à-dire l'intérieur à gauche : $\gamma(t)+i\eps\gamma'(t)\in U$ pour tout $\eps>0$ assez petit. Alors l'indice des points de $U$ relativement à $\gamma$ vaut $1$.

Soit $\Omega$ un ouvert simplement connexe contenant $\bar U$ et $f$ une fonction méromorphe sur $\Omega$ n'ayant pas de pôle sur $\gamma$. Alors l'ensemble $S$ des pôles de $f$ contenus dans $U$ est fini et
$$
\int_\gamma f(z)\,dz=2i\pi\sum_{s\in S}\Res_s(f). \qquad \text{(II.6.1)}
$$

## Hypothèses

### H1 — $\gamma$ est simple et orienté dans le sens direct

**Rôle.** C'est ce qui donne $\Ind_z(\gamma)=1$ pour $z\in U$ (et $0$ hors de $\bar U$), donc ce qui fait disparaître les indices de la formule II.5.1.

**Si on la retire.** *Sens inverse :* pour $\gamma(t)=e^{-it}$, $t\in[0,2\pi]$ (cercle unité parcouru dans le sens horaire) et $f(z)=1/z$, $\int_\gamma f=\int_0^{2\pi}\frac{-ie^{-it}}{e^{-it}}dt=-2i\pi$, alors que $2i\pi\Res_0(f)=2i\pi$ : le signe change. *Lacet non simple :* $\gamma(t)=e^{2it}$, $t\in[0,2\pi]$, a pour image le bord $C(0,1)$ du disque mais en fait deux fois le tour : $\int_\gamma\frac{dz}{z}=\int_0^{2\pi}2i\,dt=4i\pi\neq2i\pi$.

### H2 — $\bar U\subset\Omega$, avec $\Omega$ simplement connexe

**Rôle.** $\bar U$ compact contenu dans $\Omega$ garantit que $S$ est fini ; la simple connexité de $\Omega$ permet d'appliquer II.5.1.

**Si on la retire.** *Si $\bar U\not\subset\Omega$ :* $\Omega=\C\setminus\{0\}$, $U=D(0,1)$, $f(z)=e^{1/z}$, holomorphe sur $\Omega$, sans pôle : $S=\emptyset$, mais $\int_{C(0,1)}e^{1/z}dz=2i\pi$ (terme en $1/z$ de $\sum_n\frac1{n!z^n}$, série normalement convergente sur le cercle). La « singularité » en $0\in U$ n'est pas un pôle de $f\in\mathcal M(\Omega)$ et la formule tombe. *La simple connexité, en revanche, est de confort :* d'après [[ch02-residus-hypothese-homotope-remarque]], il suffit que $\gamma$ soit homotope à un lacet constant dans $\Omega$, ce qui est le cas dès que $\bar U\subset\Omega$ pour les domaines usuels (étoilés : contraction radiale dans $\bar U$).

### H3 — $f$ n'a pas de pôle sur $\gamma$

**Rôle.** L'intégrale $\int_\gamma f$ est alors bien définie ($f$ continue sur l'image compacte de $\gamma$) et chaque pôle est soit dans $U$, soit hors de $\bar U$.

**Si on la retire.** $f(z)=\frac1{z-1}$, $U=D(0,1)$ : l'intégrande $\frac{ie^{it}}{e^{it}-1}\sim\frac1t$ en $t=0^+$, l'intégrale diverge. (En valeur principale, en retirant $]-\eps,\eps[$ du paramètre, on trouve $i\pi$ : un pôle simple sur le bord compte pour un « demi-résidu » ; c'est la méthode des indentations, à justifier à chaque fois.)

### H4 — $U$ ouvert connexe borné de bord $\gamma$

**Rôle.** $U$ borné rend $\bar U$ compact ; « connexe de bord $\Gamma$ » fait de $U$ une composante connexe de $\C\setminus\Gamma$, sur laquelle l'indice est constant.

**Si on la retire.** Pour un domaine non borné (demi-plan), le « bord » n'est pas un lacet et il peut y avoir une infinité de pôles (par exemple $1/\sin z$ sur $\{\Im z>-1\}$) ; c'est pourquoi on travaille toujours avec des domaines **tronqués** ($R$ fini) puis on fait $R\to+\infty$.

## Idée de la preuve

On admet (comme le poly, théorème de Jordan) que $U$ est la composante connexe bornée de $\C\setminus\Gamma$, où l'indice vaut $1$, et que l'indice est nul sur la composante non bornée $\C\setminus\bar U$. La formule II.5.1 ne garde alors que les pôles de $U$, chacun avec poids $1$ ; la finitude vient de la compacité de $\bar U$.

## Preuve

Le poly ne démontre pas (II.6.1) ; voici la justification complète **modulo le théorème de Jordan et le calcul de l'indice**, que le poly admet ([[ch02-jordan-remarque]], poly, Remarque II.3.5, p. 41). Notons $\Gamma$ l'image de $\gamma$, de sorte que $\partial U=\Gamma$.

*Étape 1 : $U$ est une composante connexe de $\C\setminus\Gamma$.* $U$ est ouvert donc $U\cap\partial U=\emptyset$, i.e. $U\subset\C\setminus\Gamma$. $U$ est connexe, donc contenu dans une composante connexe $W$ de $\C\setminus\Gamma$. Dans $\C\setminus\Gamma$, $U$ est ouvert, et fermé car $\bar U\cap(\C\setminus\Gamma)=(U\cup\Gamma)\setminus\Gamma=U$. Comme $W$ est connexe et $U\neq\emptyset$, $U=W$. Comme $U$ est borné, c'est la composante bornée donnée par le théorème de Jordan, et l'autre composante est $\C\setminus\bar U$, non bornée.

*Étape 2 : indices.* L'indice $z\mapsto\Ind_z(\gamma)$ est constant sur chaque composante connexe de $\C\setminus\Gamma$ et nul sur la composante non bornée ([[ch02-indice-entier-localement-constant]]) : $\Ind_z(\gamma)=0$ pour $z\notin\bar U$. Sur $U$ il vaut $\pm1$ selon l'orientation (Remarque II.3.5, admise), et vaut $1$ pour l'orientation directe. *En pratique* on le vérifie en un seul point $z_0\in U$ (constance sur $U$) en déformant $\gamma$ en un cercle de centre $z_0$ par une homotopie de lacets dans $\C\setminus\{z_0\}$ ([[ch02-indice-invariance-homotopie]]) : par exemple, si $U$ est étoilé par rapport à $z_0$, la projection radiale $H(s,t)=z_0+(\gamma(t)-z_0)\big((1-s)+\frac{s\,r}{|\gamma(t)-z_0|}\big)$ ne s'annule jamais (le facteur entre parenthèses est $>0$) et ramène $\gamma$ sur un lacet tracé sur le cercle $C(z_0,r)$. Ce lacet s'écrit $t\mapsto z_0+re^{i\theta(t)}$, où $\theta$ est un argument continu ($C^1$ par morceaux) de $\gamma(t)-z_0$, et son indice en $z_0$ se calcule directement : $\frac1{2i\pi}\int_0^1\frac{i\theta'(t)\,re^{i\theta(t)}}{re^{i\theta(t)}}\,dt=\frac{\theta(1)-\theta(0)}{2\pi}$. Pour les domaines usuels parcourus une fois dans le sens direct, l'argument de $\gamma(t)-z_0$ croît de $2\pi$ sur un tour, donc l'indice vaut $1$ (pour un cercle direct centré en $z_0$, $\theta(t)=2\pi t$ : on retrouve [[ch02-indice-cercle]]).

*Étape 3 : finitude de $S$.* $\bar U$ est fermé et borné, donc compact, et contenu dans $\Omega$. L'ensemble $\mathcal P(f,\Omega)$ des pôles est localement fini dans $\Omega$, donc ne rencontre le compact $\bar U$ qu'en un nombre fini de points ([[ch02-localement-fini-caracterisations]]). A fortiori $S=\mathcal P(f,\Omega)\cap U$ est fini.

*Étape 4 : formule des résidus.* $\Omega$ est simplement connexe, $f\in\mathcal M(\Omega)$ et $\gamma$ est un lacet de $\Omega\setminus\mathcal P(f,\Omega)$ (car $\Gamma\subset\bar U\subset\Omega$ et $f$ n'a pas de pôle sur $\Gamma$). Le Théorème II.5.1 ([[ch02-formule-residus]], p. 47) donne
$$
\frac1{2i\pi}\int_\gamma f(z)\,dz=\sum_{s\in\mathcal P(f,\Omega)}\Res_s(f)\,\Ind_s(\gamma).
$$
Un pôle $s$ est soit dans $U$ (indice $1$), soit dans $\Omega\setminus\bar U$ (indice $0$), puisqu'il n'est pas sur $\Gamma=\bar U\setminus U$. Il reste $\int_\gamma f=2i\pi\sum_{s\in S}\Res_s(f)$. $\square$

## Preuve à trous

On admet le théorème de Jordan. Comme $U$ est ouvert, connexe, borné et de bord $\Gamma$, <trou indice="ouvert et fermé dans C∖Γ">$U$ est la composante connexe bornée de $\C\setminus\Gamma$ et $\C\setminus\bar U$ est la composante non bornée</trou>. Donc $\Ind_z(\gamma)=0$ si $z\notin\bar U$, et pour $z\in U$, <trou indice="déformer γ en un cercle">l'indice, constant sur $U$, vaut $1$ par invariance par homotopie dans $\C\setminus\{z_0\}$ vers un cercle direct centré en un point $z_0\in U$</trou>. Ensuite $S$ est fini car <trou>$\bar U$ est un compact de $\Omega$ et les pôles forment une partie localement finie de $\Omega$</trou>. Enfin, <trou indice="Théorème II.5.1">la formule des résidus sur l'ouvert simplement connexe $\Omega$</trou> donne $\frac1{2i\pi}\int_\gamma f=\sum_s\Res_s(f)\Ind_s(\gamma)=\sum_{s\in S}\Res_s(f)$, les pôles hors de $\bar U$ ayant un indice nul. $\square$

## Exemples

* **Un cercle.** $f(z)=\dfrac{e^z}{z(z-1)}$, $U=D(0,2)$, $\gamma=C(0,2)$ direct, $\Omega=\C$. Pôles simples $0$ et $1$, tous deux dans $U$ : $\Res_0(f)=\frac{e^0}{0-1}=-1$, $\Res_1(f)=\frac{e^1}{1}=e$ ([[ch02-residu-pole-simple]]). Donc $\int_{C(0,2)}\frac{e^z}{z(z-1)}dz=2i\pi(e-1)$. Avec $\gamma=C(0,\frac12)$, seul $0$ est dans $U$ : l'intégrale vaut $-2i\pi$.
* **Un demi-disque : $\int_{\R}\frac{dx}{1+x^4}=\frac{\pi}{\sqrt2}$.** $f(z)=\frac1{1+z^4}$, pôles simples $e^{i\pi/4},e^{3i\pi/4},e^{5i\pi/4},e^{7i\pi/4}$. Pour $R>1$, $U_R=\{|z|<R,\ \Im z>0\}$ (demi-disque, bord : $[-R,R]$ puis l'arc $C_R^+$, intérieur à gauche) contient **deux** pôles, $a_1=e^{i\pi/4}$ et $a_2=e^{3i\pi/4}$. En un zéro simple $a$ de $z^4+1$, $\Res_a(f)=\frac1{4a^3}=\frac{a}{4a^4}=-\frac a4$. Donc
$$
\int_{-R}^R\frac{dx}{1+x^4}+\int_{C_R^+}f=2i\pi\Big(-\frac{a_1+a_2}{4}\Big)=2i\pi\cdot\Big(-\frac{i\sqrt2}{4}\Big)=\frac{\pi\sqrt2}{2},
$$
car $a_1+a_2=i\sqrt2$. Sur l'arc, $|f|\le\frac1{R^4-1}$ et la longueur est $\pi R$, donc $\big|\int_{C_R^+}f\big|\le\frac{\pi R}{R^4-1}\to0$ ([[ch01-longueur-majoration-integrale]]). D'où $\int_{\R}\frac{dx}{1+x^4}=\frac{\pi}{\sqrt2}$.
* **Pour l'exemple de Fourier**, voir [[ch02-exemple-integrale-fourier]] ; pour un contour avec coupure, voir [[ch02-exemple-trou-de-serrure]].

## Pièges

* > ⚠️ **Orientation** : sens direct = intérieur à gauche. Sur le demi-disque, on parcourt $[-R,R]$ de gauche à droite puis l'arc de $R$ à $-R$. Un contour parcouru dans le sens horaire donne $-2i\pi\sum\Res$.
* > ⚠️ **Ne pas oublier de pôle** : $z^4+1=0$ a **deux** racines dans le demi-plan supérieur, pas une. Faire la liste de **tous** les pôles et tester l'appartenance à $U$ pour la valeur de $R$ choisie ($R$ plus grand que le module de tous les pôles).
* Un pôle **sur** le contour : la formule n'a pas de sens ; modifier le contour (petit demi-cercle d'indentation) et justifier la limite.
* La formule ne dit rien de l'intégrale réelle cherchée tant qu'on n'a pas montré que les morceaux parasites (arcs) tendent vers $0$ : cette majoration est le vrai travail de l'exercice.
* Le poly **admet** le théorème de Jordan et le fait que l'indice vaut $1$ sur $U$ : en copie, pour un disque, un demi-disque, un rectangle ou un secteur, une phrase suffit (domaine étoilé, contraction radiale vers un cercle).
