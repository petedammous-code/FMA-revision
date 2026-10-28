---
id: ch01-def-integrale-chemin
type: definition
chapter: 1
title: "Intégrale d'une fonction continue le long d'un chemin : $\int_\gamma f(z)\,dz$"
ref: Définition I.5.4
page: 16
importance: 2
depends: [ch01-def-chemin-lacet, ch01-chemin-c1-par-morceaux-derivee-bornee]
tags: [integrale-curviligne, chemin, dz, definition]
---
## Intuition

> 💡 On découpe le trajet $\gamma$ en petits pas $\Delta z_k=\gamma(t_{k+1})-\gamma(t_k)$ (des petits vecteurs du plan, c'est-à-dire des nombres complexes), on multiplie chaque pas par la valeur $f(\gamma(t_k))$ de la fonction à cet endroit (produit **complexe** : rotation + homothétie du pas), et on additionne : $\sum_k f(\gamma(t_k))\,\Delta z_k$. Quand les pas deviennent infiniment petits, $\Delta z_k\approx\gamma'(t_k)\,\Delta t$, et la somme tend vers $\int_a^b f(\gamma(t))\gamma'(t)\,dt$.

Le symbole « $dz$ » rappelle exactement cela : $dz=\gamma'(t)\,dt$. Le résultat est un **nombre complexe**, qui dépend de $f$, de l'image du chemin **et** de son sens de parcours (mais pas de la vitesse : [[ch01-integrale-reparametrage-oppose-concatenation]]).

Rappel : pour une fonction $g:[a,b]\to\C$ continue par morceaux, $\int_a^b g(t)\,dt:=\int_a^b\Re g(t)\,dt+i\int_a^b\Im g(t)\,dt$ (deux intégrales de Riemann réelles). Les chemins $\gamma:[a,b]\to\Omega$ sont définis dans [[ch01-def-chemin-lacet]].

## Énoncé

**Définition (poly, Définition I.5.4, p. 16).** Si $f:\Omega\to\C$ est une fonction continue et si $\gamma:[a,b]\to\Omega$ est un chemin, on définit l'**intégrale de $f$ le long du chemin $\gamma$** par la formule
$$
\int_\gamma f(z)\,dz:=\int_a^b f(\gamma(t))\,\gamma'(t)\,dt.
$$

**Pourquoi c'est bien défini (poly, p. 16).** Bien que $\gamma'$ ne soit pas nécessairement continue, elle reste bornée ([[ch01-chemin-c1-par-morceaux-derivee-bornee]]) et l'intégrale est bien définie. Précisément : si $a=t_0<\dots<t_n=b$ est une subdivision adaptée à $\gamma$, la fonction $t\mapsto f(\gamma(t))\gamma'(t)$ est définie sauf peut-être aux $t_k$, continue sur chaque $]t_{k-1},t_k[$ et y admet des limites aux deux bouts ($f\circ\gamma$ est continue et $\gamma'$ a des limites à gauche et à droite) ; elle est donc continue par morceaux et bornée, donc intégrable, et
$$
\int_\gamma f(z)\,dz=\sum_{k=1}^n\int_{t_{k-1}}^{t_k}f(\gamma(t))\gamma'(t)\,dt,
$$
la valeur (arbitraire) de $\gamma'$ aux points $t_k$ ne changeant rien.

## Hypothèses

### H1 — $f$ continue sur $\Omega$ (pas besoin d'holomorphie)

**Rôle.** Elle rend $f\circ\gamma$ continue sur le compact $[a,b]$, donc bornée, et l'intégrande continu par morceaux. Aucune holomorphie n'est demandée : on intègre aussi bien $\bar z$ ou $|z|$ que $z^2$. (Seules comptent en fait les valeurs de $f$ sur l'image de $\gamma$.)

**Si on la retire.** Si $f$ « explose » sur l'image du chemin, l'intégrale peut ne plus exister. Exemple : $f(z)=\frac{1}{z-1}$, continue sur $\C\setminus\{1\}$, et le cercle unité $\gamma(t)=e^{it}$, qui passe par $1$ : l'intégrande $\frac{ie^{it}}{e^{it}-1}$ a pour module $\frac{1}{|e^{it}-1|}=\frac{1}{2|\sin(t/2)|}\sim\frac1{|t|}$ en $0$, non intégrable. Ici $\gamma$ n'est d'ailleurs pas un chemin de l'ouvert $\C\setminus\{1\}$.

### H2 — $\gamma$ est un chemin de $\Omega$ ($C^1$ par morceaux, image dans $\Omega$)

**Rôle.** L'image dans $\Omega$ rend $f(\gamma(t))$ défini ; le caractère $C^1$ par morceaux (avec $\gamma'$ bornée) rend $\gamma'(t)$ défini et intégrable.

**Si on la retire.** Pour une courbe seulement continue (courbe de Peano, ou $t\mapsto t+it\sin(1/t)$ sur $[0,1]$, de longueur infinie), il n'y a pas de vitesse utilisable : la formule n'a plus de sens telle quelle (voir [[ch01-def-chemin-lacet]]).

## Exemples

* **Monômes sur le cercle unité.** $\gamma(t)=e^{it}$, $t\in[0,2\pi]$ ([[ch01-cercle-sens-direct]]), $\gamma'(t)=ie^{it}$. Pour $n\in\Z$,
$$
\int_\gamma z^n\,dz=\int_0^{2\pi}e^{int}\,ie^{it}\,dt=i\int_0^{2\pi}e^{i(n+1)t}\,dt=\begin{cases}2i\pi&\text{si } n=-1,\\ 0&\text{sinon,}\end{cases}
$$
car pour $m=n+1\neq0$, $\int_0^{2\pi}e^{imt}\,dt=\bigl[\frac{e^{imt}}{im}\bigr]_0^{2\pi}=0$. En particulier $\int_\gamma\frac{dz}{z}=2i\pi$ : c'est **le** calcul fondamental du cours.
* **Une fonction non holomorphe.** Sur le même cercle, $\bar\gamma(t)=e^{-it}$, donc $\int_\gamma\bar z\,dz=\int_0^{2\pi}e^{-it}ie^{it}\,dt=2i\pi\neq0$.
* **Dépendance par rapport au chemin.** De $0$ à $1+i$ : par le segment $\sigma(t)=t(1+i)$, $t\in[0,1]$, on a $\int_\sigma z\,dz=\int_0^1 t(1+i)^2\,dt=\frac{(1+i)^2}{2}=i$ et $\int_\sigma\bar z\,dz=\int_0^1t(1-i)(1+i)\,dt=1$. Par le chemin en « L » $0\to1\to1+i$ (segments $t\mapsto t$ puis $t\mapsto1+it$, [[ch01-def-chemins-composables]]) : $\int z\,dz=\int_0^1t\,dt+\int_0^1(1+it)\,i\,dt=\frac12+i-\frac12=i$ (même valeur), mais $\int\bar z\,dz=\int_0^1t\,dt+\int_0^1(1-it)\,i\,dt=\frac12+i+\frac12=1+i\neq1$. Pour $z$, qui a une primitive $z^2/2$, l'intégrale ne dépend que des extrémités ([[ch01-integrale-primitive]]) ; pour $\bar z$, non.

## Pièges

* > ⚠️ $dz=\gamma'(t)\,dt$ est **complexe** : ne pas confondre $\int_\gamma f(z)\,dz$ avec $\int_a^b f(\gamma(t))\,dt$ (on oublie $\gamma'$) ni avec l'intégrale par rapport à la longueur $\int_a^b f(\gamma(t))\,|\gamma'(t)|\,dt$ (notée parfois $\int_\gamma f\,|dz|$).
* L'intégrale sur un lacet n'a **aucune raison** d'être nulle : $\int_{C(0,1)}\bar z\,dz=2i\pi$ ($f$ non holomorphe) et $\int_{C(0,1)}\frac{dz}{z}=2i\pi$ ($f$ holomorphe sur $\C^\times$, mais le lacet entoure la singularité $0$).
* L'intégrale dépend du **sens** de parcours (elle change de signe pour $\gamma^{opp}$) et du **nombre de tours**, mais pas de la vitesse de parcours : [[ch01-integrale-reparametrage-oppose-concatenation]].
* On n'a pas $\Re\int_\gamma f\,dz=\int_\gamma\Re f\,dz$ : le facteur complexe $\gamma'(t)$ mélange parties réelle et imaginaire.
