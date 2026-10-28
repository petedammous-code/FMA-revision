---
id: ch08-euler-lagrange
type: theorem
chapter: 8
title: "Équation d'Euler-Lagrange : condition nécessaire de point critique de $\hat L$ sur $E_{a,b}$"
ref: "Question 5, p. 144 (non numérotée, section VIII) — Formule (E.L)"
page: 144
importance: 3
depends: [ch08-eab-complet-affine, ch08-lhat-c1-differentielle, ch08-du-bois-reymond-derivee, ch05-restriction-sous-espace, ch05-c1-ssi-partielles-continues, ch05-vecteur-tangent-courbe]
tags: [euler-lagrange, point-critique, calcul-des-variations, du-bois-reymond, action]
---
## Intuition

> 💡 En dimension finie, un point où $f$ est minimale vérifie $df_a=0$ : « la pente est nulle dans toutes les directions ». Ici la « fonction » est l'action $\hat L(\gamma)=\int_0^1 L(t,\gamma(t),\gamma'(t))\,dt$ ([[ch08-lagrangien-fonctionnelle]]), le « point » est une courbe $\gamma$ reliant $a$ à $b$, et les « directions » sont les déformations $h$ de la courbe qui laissent ses extrémités en place. L'équation d'Euler-Lagrange traduit « pente nulle dans toutes ces directions » par une équation **ponctuelle** en $t$ : c'est une équation différentielle du second ordre, le prix à payer pour passer d'une infinité de conditions (une par $h$) à une seule identité valable pour tout $t$.

Image mentale : on tient une corde par ses deux bouts ($a$ et $b$ fixés) et on la tord un peu ($\gamma+h$, avec $h(0)=h(1)=0$). Si $\gamma$ est une position d'équilibre de l'action, aucune petite torsion ne fait varier $\hat L$ au premier ordre. Le lemme de du Bois-Reymond ([[ch08-du-bois-reymond-derivee]]) est l'outil qui transforme « $\int(\ldots)=0$ pour toute torsion $h$ » en « $(\ldots)=0$ en chaque $t$ ».

Le cadre ([[ch08-cadre-espace-courbes]]) : $V$ est un espace de Hilbert de dimension finie, identifié à son dual $L(V;\R)$ par le produit scalaire ; $E=C^1([0;1];V)$ est muni de la norme $\norm{\gamma}_E=\sup_t\norm{\gamma(t)}_V+\sup_t\norm{\gamma'(t)}_V$ ; $E_{a,b}=\{\gamma\in E : \gamma(0)=a,\ \gamma(1)=b\}$ est un espace affine d'espace directeur $E_{0,0}$ ([[ch08-eab-complet-affine]]). Les **différentielles partielles** $\frac{\partial L}{\partial q}(u,q,v)$ et $\frac{\partial L}{\partial v}(u,q,v)$ ([[ch05-differentielles-partielles]]) sont des formes linéaires sur $V$, donc des vecteurs de $V$ après identification.

**Point critique de la restriction de $\hat L$ à $E_{a,b}$.** Fixons $\gamma\in E_{a,b}$. Pour $h\in E_{0,0}$, on a $\gamma+h\in E_{a,b}$, et $\hat L(\gamma+h)-\hat L(\gamma)-d\hat L_\gamma(h)=o(\norm h_E)$ ([[ch05-differentielle-def]]) : la restriction de $\hat L$ à $E_{a,b}$ est différentiable en $\gamma$, de différentielle la restriction de $d\hat L_\gamma$ au sous-espace fermé $E_{0,0}$ (même argument que [[ch05-restriction-sous-espace]], transporté dans l'espace affine). On dit que $\gamma$ est un **point critique de $\hat L|_{E_{a,b}}$** si cette restriction est nulle :
$$
\forall h\in E_{0,0},\qquad d\hat L_\gamma(h)=0 .
$$

## Énoncé

**Théorème (poly, Question 5, p. 144 — formule (E.L)).** Soient $(V,\langle\cdot,\cdot\rangle)$ un espace de Hilbert de dimension finie, $I$ un intervalle ouvert contenant $[0,1]$, $L:I\times V\times V\to\R$, $(u,q,v)\mapsto L(u,q,v)$ une application de classe $C^1$, $a,b\in V$ et $\hat L(\gamma)=\int_0^1 L(t,\gamma(t),\gamma'(t))\,dt$ pour $\gamma\in E=C^1([0;1];V)$.

Si $\gamma\in E_{a,b}$ est un point critique de la restriction de $\hat L$ à $E_{a,b}$, alors la fonction $t\mapsto\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$ est dérivable sur $[0;1]$ et l'on a, pour tout $t\in[0;1]$,
$$
\text{(E.L)}\qquad \frac{d}{dt}\Big(t\mapsto \frac{\partial L}{\partial v}\big(t,\gamma(t),\gamma'(t)\big)\Big)=\frac{\partial L}{\partial q}\big(t,\gamma(t),\gamma'(t)\big).
$$
Les deux membres sont des éléments de $L(V;\R)\simeq V$ (identification par le produit scalaire).

## Hypothèses

### H1 — $L$ est de classe $C^1$ sur $I\times V\times V$

**Rôle.** C'est l'hypothèse de [[ch08-lhat-c1-differentielle]] : elle rend $\hat L$ différentiable et fournit la formule de $d\hat L_\gamma$ ; elle assure aussi que les différentielles partielles $\frac{\partial L}{\partial q}$, $\frac{\partial L}{\partial v}$ existent et sont **continues** ([[ch05-c1-ssi-partielles-continues]]), ce qui est exigé par le lemme de du Bois-Reymond (fonctions $A$, $B$ continues).

**Si on la retire.** L'équation (E.L) n'a plus de sens (les différentielles partielles peuvent ne pas exister) et $\hat L$ peut ne pas être différentiable, même en un minimum. Exemple vérifié : $V=\R$, $L(u,q,v)=|q|$ (continue, non $C^1$), $a=b=0$. Alors $\hat L(\gamma)=\int_0^1|\gamma|\ge0$ et $\gamma=0\in E_{0,0}$ est le minimum de $\hat L|_{E_{0,0}}$. Pourtant, pour $h\in E_{0,0}$ non nulle et $s\in\R$, $\hat L(0+sh)-\hat L(0)=|s|\int_0^1|h|$ ; si $\hat L$ était différentiable en $0$, la fonction $s\mapsto\hat L(sh)$ serait dérivable en $s=0$ ([[ch05-vecteur-tangent-courbe]]), ce que $s\mapsto|s|\int_0^1|h|$ n'est pas. Le minimum existe, mais aucune équation d'Euler-Lagrange ne le caractérise.

### H2 — $\gamma$ est un point critique de la **restriction** à $E_{a,b}$ (variations nulles aux extrémités)

**Rôle.** Elle donne l'identité $\int_0^1\big(\langle A,h\rangle+\langle B,h'\rangle\big)dt=0$ pour **toutes** les $h\in C^1([0;1];V)$ avec $h(0)=h(1)=0$ : c'est exactement l'hypothèse du lemme [[ch08-du-bois-reymond-derivee]]. La condition aux bords $h(0)=h(1)=0$ est ce qui permet, dans ce lemme, l'intégration par parties sans terme de bord.

**Si on la retire.** Une courbe quelconque ne vérifie évidemment pas (E.L) : pour $V=\R$, $L=\tfrac12v^2$ et $\gamma(t)=t^2$, on a $\frac{\partial L}{\partial v}=v$, $\frac{\partial L}{\partial q}=0$ et $\frac{d}{dt}\gamma'(t)=2\neq0$. Plus instructif : si l'on remplace « point critique de $\hat L|_{E_{a,b}}$ » par « point critique de $\hat L$ sur $E$ tout entier » ($d\hat L_\gamma(h)=0$ pour tout $h\in E$), on obtient (E.L) **et** les conditions aux bords naturelles $\frac{\partial L}{\partial v}(0,\gamma(0),\gamma'(0))=\frac{\partial L}{\partial v}(1,\gamma(1),\gamma'(1))=0$. En effet (E.L) est acquise (prendre $h\in E_{0,0}$), donc $B$ est $C^1$ avec $B'=A$, et pour $h\in E$ quelconque $0=\int_0^1\big(\langle B',h\rangle+\langle B,h'\rangle\big)dt=\langle B(1),h(1)\rangle-\langle B(0),h(0)\rangle$ ; en choisissant $h(t)=(1-t)w$ puis $h(t)=tw$ ($w\in V$), on obtient $B(0)=B(1)=0$. Pour $L=\tfrac12 v^2$, cela force $\gamma'(0)=\gamma'(1)=0$, donc $\gamma$ constante : $\hat L$ n'a de point critique sur $E$ que les constantes, alors que sur $E_{a,b}$ ($a\ne b$) le segment est critique (voir Exemples).

### H3 — Le cadre : $V$ de dimension finie, $E$ muni de la norme $C^1$

**Rôle.** La norme $\norm\cdot_E$ contrôle $\gamma'$ : sans cela $\hat L$, qui dépend de $\gamma'$, n'est pas différentiable. La dimension finie sert à la complétude de $E$ ([[ch08-eab-complet-affine]]) et à l'identification $V\simeq L(V;\R)$ (théorème de représentation de Riesz, [[ch05-gradient-hilbert]]).

**Si on la retire.** Avec la seule norme $\sup_t\norm{\gamma(t)}_V$ sur $E$, la notion de point critique change de sens et $\hat L$ n'est même plus continue : pour $V=\R$, $L=\tfrac12v^2$ et $\gamma_n(t)=\tfrac1n\sin(n^2t)$, on a $\sup|\gamma_n|\le\tfrac1n\to0$ mais $\hat L(\gamma_n)=\tfrac12\int_0^1n^2\cos^2(n^2t)\,dt=\tfrac{n^2}{4}+\tfrac{\sin(2n^2)}{8}\to+\infty$. La dimension finie, elle, est de confort : la preuve n'utilise de $V$ que sa complétude et l'identification de Riesz, valables dans tout espace de Hilbert.

## Idée de la preuve

La formule de $d\hat L_\gamma$ ([[ch08-lhat-c1-differentielle]]) écrit la condition de point critique sous la forme $\int_0^1\big(\langle A(t),h(t)\rangle+\langle B(t),h'(t)\rangle\big)dt=0$ pour tout $h\in E_{0,0}$, avec $A=\frac{\partial L}{\partial q}(t,\gamma,\gamma')$ et $B=\frac{\partial L}{\partial v}(t,\gamma,\gamma')$ continues. Le lemme de du Bois-Reymond avec dérivée ([[ch08-du-bois-reymond-derivee]]) donne alors $B$ dérivable et $B'=A$ : c'est (E.L).

## Preuve

Soit $\gamma\in E_{a,b}$ un point critique de $\hat L|_{E_{a,b}}$. Posons, pour $t\in[0;1]$,
$$
A(t)=\frac{\partial L}{\partial q}\big(t,\gamma(t),\gamma'(t)\big)\in V,\qquad B(t)=\frac{\partial L}{\partial v}\big(t,\gamma(t),\gamma'(t)\big)\in V,
$$
où l'on identifie les formes linéaires $\frac{\partial L}{\partial q}$, $\frac{\partial L}{\partial v}\in L(V;\R)$ à des vecteurs de $V$ via le produit scalaire ([[ch08-cadre-espace-courbes]]).

*Étape 1 : $A$ et $B$ sont continues.* Comme $L$ est de classe $C^1$ sur $I\times V\times V$, ses différentielles partielles $\frac{\partial L}{\partial q},\frac{\partial L}{\partial v}:I\times V\times V\to L(V;\R)$ existent et sont continues ([[ch05-c1-ssi-partielles-continues]]). L'application $t\mapsto(t,\gamma(t),\gamma'(t))$ est continue de $[0;1]$ dans $I\times V\times V$ car $\gamma$ est de classe $C^1$. Par composition, $A$ et $B$ sont continues sur $[0;1]$ (l'identification $L(V;\R)\simeq V$ est une isométrie linéaire, donc continue).

*Étape 2 : traduction de l'hypothèse.* D'après [[ch08-lhat-c1-differentielle]], $\hat L$ est de classe $C^1$ sur $E$ et, pour tout $h\in E$,
$$
d\hat L_\gamma(h)=\int_0^1\Big(\Big\langle \frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t)),h(t)\Big\rangle+\Big\langle\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t)),h'(t)\Big\rangle\Big)dt=\int_0^1\big(\langle A(t),h(t)\rangle+\langle B(t),h'(t)\rangle\big)\,dt .
$$
Dire que $\gamma$ est un point critique de la restriction de $\hat L$ à l'espace affine $E_{a,b}$, d'espace directeur $E_{0,0}$ ([[ch08-eab-complet-affine]]), c'est dire que $d\hat L_\gamma(h)=0$ pour tout $h\in E_{0,0}$, c'est-à-dire pour toute fonction $h\in C^1([0;1];V)$ vérifiant $h(0)=h(1)=0$. On a donc
$$
\forall h\in C^1([0;1];V),\quad h(0)=h(1)=0\ \Longrightarrow\ \int_0^1\big(\langle A(t),h(t)\rangle+\langle B(t),h'(t)\rangle\big)\,dt=0 .
$$

*Étape 3 : du Bois-Reymond.* Les fonctions $A,B:[0;1]\to V$ sont continues et vérifient l'identité intégrale ci-dessus pour toutes les fonctions test $h$ nulles aux bords : c'est exactement l'hypothèse du lemme [[ch08-du-bois-reymond-derivee]]. Celui-ci affirme que $B$ est dérivable sur $[0;1]$ et que $B'=A$. Autrement dit, pour tout $t\in[0;1]$,
$$
\frac{d}{dt}\Big(t\mapsto\frac{\partial L}{\partial v}\big(t,\gamma(t),\gamma'(t)\big)\Big)=\frac{\partial L}{\partial q}\big(t,\gamma(t),\gamma'(t)\big),
$$
ce qui est (E.L). Remarquons que la dérivabilité de $B$ fait partie de la **conclusion** : rien ne la donnait a priori, $\gamma$ étant seulement $C^1$. $\square$

*Complément (hors poly, deux lignes).* (i) Tout **extremum local** de $\hat L|_{E_{a,b}}$ est un point critique : si $\gamma$ est, disons, un minimum local et $h\in E_{0,0}$, la fonction $s\mapsto\hat L(\gamma+sh)$ est dérivable en $0$ de dérivée $d\hat L_\gamma(h)$ ([[ch05-vecteur-tangent-courbe]]) et admet un minimum local en $s=0$, donc $d\hat L_\gamma(h)=0$. (ii) **Réciproque** : si $\gamma\in E_{a,b}$ est telle que $B$ est $C^1$ avec $B'=A$, alors pour $h\in E_{0,0}$, $d\hat L_\gamma(h)=\int_0^1\big(\langle B',h\rangle+\langle B,h'\rangle\big)dt=\int_0^1\frac{d}{dt}\langle B,h\rangle\,dt=\langle B(1),h(1)\rangle-\langle B(0),h(0)\rangle=0$ : $\gamma$ est un point critique. Les solutions de (E.L) dans $E_{a,b}$ sont donc exactement les points critiques de $\hat L|_{E_{a,b}}$.

## Preuve à trous

Soit $\gamma\in E_{a,b}$ un point critique de $\hat L|_{E_{a,b}}$. Posons $A(t)=\frac{\partial L}{\partial q}(t,\gamma(t),\gamma'(t))$ et $B(t)=\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$, vecteurs de $V$ après identification. Ces fonctions sont <trou indice="que sait-on des différentielles partielles d'une application de classe C^1 ?">continues sur $[0;1]$, comme composées des différentielles partielles de $L$ (continues car $L$ est $C^1$) avec l'application continue $t\mapsto(t,\gamma(t),\gamma'(t))$</trou>.

D'après la formule de $d\hat L_\gamma$, pour tout $h\in E$ : <trou indice="formule de la question 2">$d\hat L_\gamma(h)=\int_0^1\big(\langle A(t),h(t)\rangle+\langle B(t),h'(t)\rangle\big)\,dt$</trou>.

L'hypothèse « point critique de la restriction à $E_{a,b}$ » signifie que <trou indice="sur quelles directions h la différentielle de la restriction s'annule-t-elle ?">$d\hat L_\gamma(h)=0$ pour tout $h$ dans l'espace directeur $E_{0,0}$, c'est-à-dire pour toute $h\in C^1([0;1];V)$ avec $h(0)=h(1)=0$</trou>.

On applique alors <trou indice="le lemme qui transforme une identité intégrale contre toutes les fonctions test en une égalité ponctuelle">le lemme de du Bois-Reymond avec dérivée (question 4) aux fonctions continues $A$ et $B$ : $B$ est dérivable et $B'=A$</trou>, ce qui est exactement (E.L). $\square$

## Exemples

* **Le segment minimise l'énergie.** $V=\R^n$, $L(u,q,v)=\tfrac12\norm v^2$. Alors $\frac{\partial L}{\partial v}(u,q,v)=\langle v,\cdot\rangle\simeq v$ et $\frac{\partial L}{\partial q}=0$, donc (E.L) s'écrit $\frac{d}{dt}\gamma'(t)=0$ : $\gamma'$ est constante et $\gamma(t)=a+t(b-a)$. Vérification directe que ce segment est critique : $d\hat L_\gamma(h)=\int_0^1\langle b-a,h'(t)\rangle\,dt=\langle b-a,h(1)-h(0)\rangle=0$ pour $h\in E_{0,0}$. Ici c'est même un minimum global sur $E_{a,b}$ : $\hat L(\gamma+h)=\hat L(\gamma)+d\hat L_\gamma(h)+\tfrac12\int_0^1\norm{h'}^2\ge\hat L(\gamma)$.
* **Oscillateur harmonique : le problème aux deux bouts n'a ni existence ni unicité en général.** $V=\R$, $L=\tfrac12v^2-\tfrac12\omega^2q^2$. On a $\frac{\partial L}{\partial v}=v$, $\frac{\partial L}{\partial q}=-\omega^2q$ et (E.L) donne $\gamma''=-\omega^2\gamma$, soit $\gamma(t)=\alpha\cos\omega t+\beta\sin\omega t$. Pour $\omega=\pi$ : $\gamma(0)=\alpha=a$ et $\gamma(1)=-\alpha=b$. Si $b=-a$, toute valeur de $\beta$ convient (une infinité de points critiques de $\hat L|_{E_{a,-a}}$) ; si $b\neq-a$, il n'y a **aucun** point critique. À comparer avec le problème de Cauchy ($\gamma(t_0)$ et $\gamma'(t_0)$ donnés), qui a une solution locale unique ([[ch08-existence-unicite-locale]]).
* **Un point critique qui n'est ni minimum ni maximum.** Même $L$ avec $\omega=\tfrac{3\pi}2$, $a=b=0$. Les solutions de $\gamma''=-\omega^2\gamma$ nulles en $0$ sont $\beta\sin(\omega t)$ et $\sin\omega=-1\ne0$ force $\beta=0$ : l'unique point critique est $\gamma=0$. Or, pour $h\in E_{0,0}$, $\hat L(h)=\tfrac12\int_0^1\big(h'^2-\omega^2h^2\big)dt$. Avec $h=\sin(\pi t)$ : $\int_0^1h'^2=\tfrac{\pi^2}2$, $\int_0^1h^2=\tfrac12$, d'où $\hat L(h)=\tfrac12\big(\tfrac{\pi^2}2-\tfrac{9\pi^2}8\big)=-\tfrac{5\pi^2}{16}<0$ ; avec $h=\sin(2\pi t)$ : $\hat L(h)=\tfrac12\big(2\pi^2-\tfrac{9\pi^2}{8}\big)=\tfrac{7\pi^2}{16}>0$. Donc $\hat L(sh)=s^2\hat L(h)$ prend des valeurs des deux signes dans tout voisinage de $0$ : (E.L) est une condition **nécessaire** de point critique, pas une condition d'extremum. On voit aussi que $\hat L|_{E_{0,0}}$ n'est pas minorée ($s\to\infty$ avec $h=\sin\pi t$) : un minimum peut ne pas exister.

## Pièges

* > ⚠️ Dans (E.L), $\frac{d}{dt}$ est une dérivée **totale** de la fonction composée $t\mapsto\frac{\partial L}{\partial v}(t,\gamma(t),\gamma'(t))$ ; ce n'est pas $\frac{\partial^2L}{\partial u\,\partial v}$. Si $L$ est $C^2$ et $\gamma$ est $C^2$, la règle de la chaîne donne $\frac{d}{dt}\frac{\partial L}{\partial v}=\frac{\partial^2L}{\partial u\partial v}+\frac{\partial^2L}{\partial q\partial v}\cdot\gamma'+\frac{\partial^2L}{\partial v^2}\cdot\gamma''$. C'est pour éviter cette confusion que le poly réserve $u,q,v$ à $L$ et $t$ à $\gamma$.
* > ⚠️ Ne pas supposer a priori que $t\mapsto\frac{\partial L}{\partial v}(t,\gamma,\gamma')$ est dérivable, ni que $\gamma$ est $C^2$ : $\gamma$ est seulement $C^1$. La dérivabilité est **démontrée** par du Bois-Reymond ; la régularité $C^2$ de $\gamma$ n'est garantie en général que sous l'hypothèse de Lagrangien $C^2$ régulier ([[ch08-systeme-premier-ordre-cauchy-lipschitz]]) — elle s'obtient aussi directement dans des cas particuliers, comme $L=\tfrac12\norm v^2-U(q)$ où (E.L) dit que $\gamma'$ est dérivable de dérivée $-\nabla U(\gamma)$ ([[ch08-equation-newton]]).
* Les variations $h$ parcourent $E_{0,0}$ (nulles aux extrémités), pas $E$ : c'est ce qui autorise l'intégration par parties sans terme de bord et c'est pourquoi la constante de du Bois-Reymond reste libre. Oublier cette restriction ajoute des conditions aux bords (H2).
* (E.L) est une condition nécessaire de **point critique** ; un point critique n'est en général ni un minimum ni un maximum (troisième exemple), et un minimum peut ne pas exister.
* $\frac{\partial L}{\partial v}$ et $\frac{\partial L}{\partial q}$ sont des formes linéaires sur $V$ ; les écrire comme des vecteurs (« gradients ») utilise le produit scalaire de $V$ ([[ch05-gradient-hilbert]]). Changer de produit scalaire change les vecteurs, pas l'équation (voir [[ch08-equation-newton]]).
* La formule $d\hat L_\gamma(h)$ comporte un terme en $h'$ : il est indispensable (c'est lui qui produit la dérivée $\frac{d}{dt}$ dans (E.L)), et il explique pourquoi $E$ doit porter la norme $C^1$ (H3).
