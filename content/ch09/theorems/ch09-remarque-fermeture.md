---
id: ch09-remarque-fermeture
type: proposition
chapter: 9
title: Une sous-variété n'est pas supposée fermée (spirale)
ref: Remarque IX.2.17
page: 151
importance: 2
depends: [ch09-sous-variete-def, ch09-immersion-submersion-def, ch09-ex-sous-espace-affine, ch09-ex-ouvert-de-sous-variete]
tags: [sous-variete, fermee, adherence, spirale, contre-exemple]
---
## Intuition

> 💡 La définition d'une sous-variété ([[ch09-sous-variete-def]]) ne regarde que les points **de** $S$ : autour de chacun, $S$ doit ressembler à un morceau d'ouvert de $\R^m$. Elle ne dit rien des points **limites** qui ne sont pas dans $S$. Une spirale qui s'enroule indéfiniment vers l'origine sans l'atteindre est parfaitement lisse en chacun de ses points ; l'origine est un « trou » au bord, que la définition ignore.

Rappel : une partie $S$ de $\R^N$ est **fermée** si elle contient toutes les limites de ses suites convergentes, c'est-à-dire si $S=\bar S$, où $\bar S$ désigne l'**adhérence** de $S$ (ensemble des limites de suites de points de $S$).

## Énoncé

**Proposition (poly, Remarque IX.2.17, p. 151).** On ne suppose pas qu'une sous-variété de $\R^N$ soit fermée dans $\R^N$. Par exemple, dans $\R^2$, la spirale $S=x(\R)$ définie par le paramétrage
$$
x:\R\to\R^2,\qquad s\mapsto(e^s\cos s,\ e^s\sin s)
$$
est une sous-variété de dimension $1$ (de classe $C^\infty$) de $\R^2$, et a dans son adhérence le point $(0,0)$ qui n'est pas un point de la sous-variété. Comme autre exemple, on peut citer celui d'une droite privée d'un point.

*Précision :* le poly affirme sans le détailler que la spirale est une sous-variété ; c'est démontré ci-dessous.

## Hypothèses

### H1 — le point limite $(0,0)$ n'est pas dans $S$

**Rôle.** C'est lui qui fait que $S$ n'est pas fermée : $(0,0)\in\bar S\setminus S$.

**Si on la retire.** $S\cup\{(0,0)\}$ est fermée, mais **n'est pas** une sous-variété : l'application $r\in[0;+\infty[\ \mapsto(r\cos\ln r,\ r\sin\ln r)$ (prolongée par $0\mapsto(0,0)$) est continue, injective, d'inverse $p\mapsto\norm p$ continu, donc $S\cup\{(0,0)\}$ est homéomorphe à $[0;+\infty[$, qui n'est homéomorphe à aucune sous-variété au voisinage de $0$ (argument topologique de [[ch09-contre-ex-demi-droite]] : un voisinage connexe de l'extrémité privé de celle-ci reste connexe). Ajouter le point limite détruit la structure de sous-variété.

### H2 — $x$ est un homéomorphisme sur son image (le rayon $e^s$ est strictement croissant)

**Rôle.** C'est ce qui fait de $x$ un paramétrage **global** de $S$ : $x^{-1}(p)=\ln\norm p$ est continue.

**Si on la retire.** Une immersion injective dont l'inverse n'est pas continu peut avoir une image qui n'est pas une sous-variété, même si cette image est fermée : c'est le folium de Descartes ([[ch09-contre-ex-folium]]).

## Idée de la preuve

$x$ est $C^\infty$, $x'(s)\neq0$ et $\norm{x(s)}=e^s$ ; donc $x$ est injective et $x^{-1}(p)=\ln\norm p$ est continue : $x$ est un paramétrage global (avec $V=\R^2$). Enfin $x(-n)\to(0,0)$ alors que $\norm{x(s)}=e^s>0$.

## Preuve

*Classe.* Les composantes de $x$ sont $C^\infty$.

*Immersion.* $x'(s)=e^s(\cos s-\sin s,\ \sin s+\cos s)$, donc $\norm{x'(s)}^2=e^{2s}\big((\cos s-\sin s)^2+(\sin s+\cos s)^2\big)=2e^{2s}\neq0$. Ainsi $dx_s:h\mapsto h\,x'(s)$ est injective ([[ch09-immersion-submersion-def]]).

*Homéomorphisme sur l'image.* $\norm{x(s)}=e^s$. Si $x(s)=x(s')$, alors $e^s=e^{s'}$, donc $s=s'$ : $x$ est injective, donc bijective de $\R$ sur $S$. Son inverse est $x^{-1}(p)=\ln\norm p$ pour $p\in S$, restriction à $S$ de la fonction continue $p\mapsto\ln\norm p$ sur $\R^2\setminus\{0\}$ : $x^{-1}$ est continue.

*Sous-variété.* Pour tout $p\in S$, on prend $U=\R$, $V=\R^2$ et le paramétrage $x:U\to V\cap S=S$ : les trois conditions de [[ch09-sous-variete-def]] sont vérifiées. Donc $S$ est une sous-variété de dimension $1$ et de classe $C^\infty$ de $\R^2$.

*Non fermée.* $\norm{x(-n)}=e^{-n}\to0$, donc $(0,0)\in\bar S$ ; mais $\norm{x(s)}=e^s>0$ pour tout $s$, donc $(0,0)\notin S$. Ainsi $S\neq\bar S$.

*Droite privée d'un point.* $D=\R\times\{0\}$ est une sous-variété de dimension $1$ ([[ch09-ex-sous-espace-affine]]) ; $D\setminus\{(0,0)\}=D\cap(\R^2\setminus\{(0,0)\})$ en est un ouvert, donc une sous-variété ([[ch09-ex-ouvert-de-sous-variete]]) ; et $(1/n,0)\to(0,0)\notin D\setminus\{(0,0)\}$. $\square$

## Preuve à trous

*Immersion :* $x'(s)=e^s(\cos s-\sin s,\sin s+\cos s)$ et <trou>$\norm{x'(s)}^2=2e^{2s}\neq0$</trou>.

*Homéomorphisme :* la clé est que <trou indice="calculer la norme de x(s)">$\norm{x(s)}=e^s$ est strictement croissante</trou>, d'où l'injectivité et la formule <trou>$x^{-1}(p)=\ln\norm p$, continue sur $S$</trou>.

*Non fermée :* <trou>$x(-n)\to(0,0)$ mais $\norm{x(s)}=e^s>0$, donc $(0,0)\in\bar S\setminus S$</trou>. $\square$

## Exemples

* **Pourquoi c'est important : champs de vecteurs.** Sur $S=(\R\times\{0\})\setminus\{(0,0)\}$, le champ constant $X=(-1,0)$ est tangent à $S$ ; la courbe intégrale issue de $(1,0)$ est $t\mapsto(1-t,0)$, qui **sort** de $S$ à l'instant $t=1$ en atteignant $(0,0)\in\bar S\setminus S$. C'est pourquoi l'hypothèse « $S$ fermée » est indispensable dans [[ch09-courbe-integrale-reste-dans-sous-variete-fermee]].
* **Sous-variétés fermées classiques.** Les ensembles $f^{-1}(\{a\})$ avec $f$ continue sur $\R^N$ entier sont fermés : la sphère, les quadriques, le tore ([[ch09-sous-variete-equation-valeur-reguliere]]). Mais si $f$ n'est définie que sur un ouvert $V\neq\R^N$, $f^{-1}(\{a\})$ n'est fermé que **dans $V$** : par exemple $f(x,y)=y$ sur $V=\R^2\setminus\{(0,0)\}$ donne $f^{-1}(\{0\})=$ la droite privée de l'origine.
* **Fermée et sous-variété sont indépendants.** La spirale est une sous-variété non fermée ; l'image du folium de Descartes ([[ch09-contre-ex-folium]]) est fermée dans $\R^2$ mais n'est pas une sous-variété ; le cercle unité est les deux.

## Pièges

* > ⚠️ Ne jamais supposer qu'une sous-variété est fermée (ni compacte, ni connexe — voir [[ch09-remarque-connexite]]). Quand un théorème en a besoin (flot d'un champ tangent qui reste dans $S$, existence d'extrema par compacité), c'est écrit dans ses hypothèses.
* Une sous-variété est toujours **localement fermée** : par le redressement ([[ch09-redressement-local]]), $V'\cap S=\Phi^{-1}((\R^m\times\{0\})\cap W)$ est fermé dans l'ouvert $V'$. Le défaut de fermeture se voit seulement en des points **hors** de $S$.
* La spirale a une longueur **finie** entre $s=-\infty$ et $s=0$ ($\int_{-\infty}^0\sqrt2\,e^s\,ds=\sqrt2$) tout en faisant une infinité de tours : cela n'empêche en rien qu'elle soit une sous-variété.
